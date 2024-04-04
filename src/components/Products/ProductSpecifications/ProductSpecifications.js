import { Typography } from '@material-tailwind/react';
import React from 'react';

const ProductSpecifications = ({ data }) => {
	return (
		<div className="w-full border-gray-700 border-solid border-[1px] rounded-xl overflow-hidden">
			{data?.map((item, index) => {
				return (
					<div
						className={`grid grid-cols-3 px-4 py-2 ${
							index % 2 === 0 ? 'bg-main' : ''
						}`}
						key={item.type}
					>
						<div className="col-span-1">
							<Typography className="text-text text-base">
								{item.type}:
							</Typography>
						</div>
						<div className="col-span-2">
							<Typography className="text-text">
								{item.value}
							</Typography>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductSpecifications;
