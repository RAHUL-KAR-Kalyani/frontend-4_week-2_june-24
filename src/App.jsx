import React, { useState } from 'react';
import axios from 'axios';
import PincodeForm from './component/PincodeForm';
import PincodeDetails from './component/PincodeDetails';
import Loader from './component/Loader';
import './App.css';

const App = () => {
	const [pincodeData, setPincodeData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filter, setFilter] = useState('');
	const [error, setError] = useState('');

	const fetchPincodeData = async (pincode) => {
		setLoading(true);
		setError('');
		try {
			const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
			const data = response.data[0];
			if (data.Status === 'Success') {
				setPincodeData(data.PostOffice);
			} else {
				setError('No data found for the provided pincode.');
			}
		} catch (err) {
			setError('An error occurred while fetching data.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="App">
			<PincodeForm onSearch={fetchPincodeData} />
			{loading && <Loader />}
			{error && <p>{error}</p>}
			{pincodeData.length > 0 && (
				<PincodeDetails details={pincodeData} filter={filter} setFilter={setFilter} />
			)}
		</div>
	);
};

export default App;
