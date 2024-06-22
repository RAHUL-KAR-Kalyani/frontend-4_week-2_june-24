import React, { useState } from 'react';

const PincodeForm = ({ onSearch }) => {
	const [pincode, setPincode] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (pincode.length === 6 && !isNaN(pincode)) {
			onSearch(pincode);
		} else {
			alert('Please enter a valid 6-digit pincode.');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<p style={{fontWeight:"bold",fontSize:"40px",textAlign:"left",paddingLeft:"10px"}}>Enter Pincode</p>
				<input style={{width:"40rem"}} type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Enter 6-digit pincode" />
				<br />
				<button style={{backgroundColor:"black",color:"white", height:"auto",width:"auto", margin:"8px"}} type="submit">Lookup</button>
			</div>
		</form>
	);
};

export default PincodeForm;
