import { Typography } from '@material-tailwind/react';
import React from 'react';

const Infor = ({ data }) => {
	return (
		<div className="w-full bg-main rounded-md p-4">
			<Typography className="text-text text-base font-semibold uppercase mb-2">
				Shipping information
			</Typography>
			<Typography className="text-base">
				{data.gender === 'male' ? 'Mr.' : 'Ms.'}{' '}
				<span className="text-highlight">{data.name}</span>
			</Typography>
			<Typography className="text-base">
				Phone: <span className="text-highlight">{data.phone}</span>
			</Typography>
			<Typography className="text-base">
				Email: <span className="text-highlight">{data.mail}</span>
			</Typography>
		</div>
	);
};

export default Infor;
