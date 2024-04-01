import React, { useState } from 'react';
import { ProductCarousel } from './ProductCarousel';
import {
	Breadcrumbs,
	Button,
	Chip,
	Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import OptionList from '../OptionList/OptionList';
import RatingBar from '../RatingBar/RatingBar';
import { LAPTOPPOLICY } from '../../resources/Laptop';
import ProductPolicy from './ProductPolicy';

const ProductDetail = ({ data, cate }) => {
	console.log(data, cate);

	const imgList = [
		'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
		'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
		'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
	];

	const [colorList, setColorList] = useState([
		{ title: 'Red', choose: true },
		{ title: 'Green', choose: false },
		{ title: 'Yellow', choose: false },
		{ title: 'Blue', choose: false },
	]);

	const [variantList, setVariantList] = useState([
		{ title: '8GB - 128GB', choose: true },
		{ title: '8GB - 256GB', choose: false },
		{ title: '8GB - 512GB', choose: false },
	]);

	const handleChooseColor = (value) => {
		setColorList((prev) => {
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
		setVariantList((prev) => {
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
			<Breadcrumbs className="bg-transparent px-4 my-3 tablet:mt-0 text-text flex items-end">
				<Link to="/" className="opacity-60">
					<Typography className="text-text hover:opacity-60">
						<HomeIcon className="w-5 h-5 mb-1 text-text hover:opacity-60" />
					</Typography>
				</Link>
				<Link to={window.location.pathname}>
					<Typography className="text-text hover:opacity-60">
						{cate}
					</Typography>
				</Link>
				<Link to={window.location.pathname}>
					<Typography className="text-highlight text-lg hover:opacity-60">
						{data?.name || 'Fake name'}
					</Typography>
				</Link>
			</Breadcrumbs>
			<div className="w-full mb-16 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-5 max-w-[1200px]">
				{/* product image  */}
				<div className="md:col-span-3 w-full lg:h-[380px] desktop:h-96">
					<ProductCarousel imgList={imgList} />
				</div>
				{/* buy  */}
				<div className="md:col-span-2">
					<Typography className="text-text text-2xl font-semibold mb-2">
						iPhone 15 Pro Max 256GB
					</Typography>

					<Typography className="text-text text-base italic font-semibold opacity-70 mb-2">
						iPhone 15 Pro Max là một chiếc điện thoại thông minh cao
						cấp được mong đợi nhất năm 2023.
					</Typography>

					<div className="flex flex-row gap-4 items-center mb-6">
						<RatingBar
							value={4}
							relatedStyle={'text-highlight text-sm w-4 h-4'}
							unrelatedStyle={'text-text text-sm w-4 h-4 '}
							wrapperStyle={
								'flex flex-row gap-1 hover:opacity-60'
							}
						/>
						<Typography className="text-text text-sm">
							(90 reviews)
						</Typography>
					</div>

					<OptionList
						wrapperStyle={'flex flex-row gap-1 mb-4'}
						data={variantList}
						handleChoose={handleChooseVariant}
					/>
					<OptionList
						wrapperStyle={'flex flex-row gap-1'}
						data={colorList}
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
				</div>

				<div className="md:col-span-3 w-full flex gap-4">
					{cate === 'Laptop' && <ProductPolicy data={LAPTOPPOLICY} />}
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
