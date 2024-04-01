import { Button } from '@material-tailwind/react';
import React from 'react';

const OptionList = ({ data, handleChoose, wrapperStyle }) => {
	return (
		<div className={wrapperStyle}>
			{data?.map((item) => {
				return (
					<Button
						key={item.title}
						className={`p-2 focus:ring-2 focus:ring-highlight ${
							item.choose
								? 'bg-highlight text-main ring-2 ring-highlight'
								: 'text-main bg-text '
						} `}
						variant="outlined"
						onClick={() => handleChoose(item.title)}
					>
						{item.title}
					</Button>
				);
			})}
		</div>
	);
};

export default OptionList;
