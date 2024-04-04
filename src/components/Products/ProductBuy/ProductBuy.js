import { Button, Chip, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import RatingBar from '../../RatingBar/RatingBar';
import OptionList from '../../OptionList/OptionList';

const ProductBuy = ({ colorList, variantList }) => {
	const [color, setColor] = useState(colorList);

	const [variant, setVariant] = useState(variantList);

	const handleChooseColor = (value) => {
		setColor((prev) => {
			return prev.map((option) => {
				if (option.title === value) {
					option.choose = true;
				} else {
					option.choose = false;
				}
				return option;
			});
		});
	};

	const handleChooseVariant = (value) => {
		setVariant((prev) => {
			return prev.map((option) => {
				if (option.title === value) {
					option.choose = true;
				} else {
					option.choose = false;
				}
				return option;
			});
		});
	};
	return (
		<>
			<Typography className="text-text text-2xl font-semibold mb-2">
				iPhone 15 Pro Max 256GB
			</Typography>

			<Typography className="text-text text-base italic font-semibold opacity-70 mb-2">
				iPhone 15 Pro Max là một chiếc điện thoại thông minh cao cấp
				được mong đợi nhất năm 2023.
			</Typography>

			<div className="flex flex-row gap-4 items-center mb-6">
				<RatingBar
					value={4}
					relatedStyle={'text-highlight text-sm w-4 h-4'}
					unrelatedStyle={'text-text text-sm w-4 h-4 '}
					wrapperStyle={'flex flex-row gap-1 hover:opacity-60'}
				/>
				<Typography className="text-text text-sm">
					(90 reviews)
				</Typography>
			</div>

			<OptionList
				wrapperStyle={'flex flex-row gap-1 mb-4'}
				data={variant}
				handleChoose={handleChooseVariant}
			/>
			<OptionList
				wrapperStyle={'flex flex-row gap-1'}
				data={color}
				handleChoose={handleChooseColor}
			/>

			<hr className="my-8 border-blue-gray-50" />

			<div className="flex flex-row gap-3 items-center">
				<Typography className="text-highlight text-xl font-semibold">
					19.990.000 VND
				</Typography>

				<Typography className="text-text text-base line-through">
					21.990.000 VND
				</Typography>

				<Chip
					className="text-highlight border-highlight border-solid border-[1px] py-1 px-2"
					value="-5%"
				/>
			</div>
			<Button
				ripple={true}
				fullWidth={true}
				className="bg-highlight my-4 py-3 rounded-xl border-text border-solid border-[1px] text-main shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
			>
				Add to cart
			</Button>
		</>
	);
};

export default ProductBuy;
