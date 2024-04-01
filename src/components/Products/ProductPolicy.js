import { Typography } from '@material-tailwind/react';
import React from 'react';

const ProductPolicy = ({ data }) => {
	return (
		<div className="w-full grid grid-cols-1 gap-x-8 md:grid-cols-2 border-solid border-[1px] border-gray-700 px-4 rounded-xl">
			{data?.map((item, index) => {
				return (
					<div
						className={`flex flex-row gap-4 py-4  ${
							index === 2
								? 'md:col-span-2 border-solid border-t-[1px] border-gray-700'
								: ''
						}`}
						key={item.content}
					>
						<div>{item.icon} </div>
						<Typography className="text-base text-text">
							{item.content}
						</Typography>
					</div>
				);
			})}
		</div>
	);
};

export default ProductPolicy;
