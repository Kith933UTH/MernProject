import { Typography } from '@material-tailwind/react';
import React from 'react';

const DetailItem = ({ list, title }) => {
	const len = list.length;
	return (
		<div className="w-full mb-3">
			<Typography className="text-highlight text-base font-semibold bg-main py-1 px-4 rounded-xl">
				{title}
			</Typography>
			{list.map((item, index) => {
				return (
					<div
						className={`grid grid-cols-3 gap-4 pl-4 py-1 ${
							index !== len - 1
								? 'border-b-[1px] border-gray-800 border-solid'
								: ''
						}`}
						key={item.type}
					>
						<div className="col-span-1">
							<Typography className="text-text text-sm">
								{item.type}:
							</Typography>
						</div>
						<div className="col-span-2">
							<Typography className="text-text text-sm">
								{item.value}
							</Typography>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DetailItem;
