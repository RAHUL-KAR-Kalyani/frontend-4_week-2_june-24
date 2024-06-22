import React from 'react';

const PincodeDetails = ({ details, filter, setFilter }) => {
	const filteredDetails = details.filter((postOffice) =>
		postOffice.Name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div>
			<input style={{width:"40rem"}} type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by post office name" />
			<p>Number of Pincodes Found</p>
			{filteredDetails.length ? (
				<ul>
					{filteredDetails.map((postOffice) => (
						<li key={postOffice.Name}>
							<h3>{postOffice.Name}</h3>
							<p>Pincode: {postOffice.Pincode}</p>
							<p>District: {postOffice.District}</p>
							<p>State: {postOffice.State}</p>
						</li>
					))}
				</ul>
			) : (
				<p>Couldn't find the postal data you’re looking for…</p>
			)}
		</div>
	);
};

export default PincodeDetails;
