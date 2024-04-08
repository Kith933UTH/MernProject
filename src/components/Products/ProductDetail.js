import React from 'react';

import { Breadcrumbs, Typography } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import DetailedConfiguration from './DetailedConfiguration/DetailedConfiguration.js';
import ProductCarousel from './ProductCarousel/ProductCarousel.js';
import ProductBuy from './ProductBuy/ProductBuy.js';
import ProductPolicy from './ProductPolicy/ProductPolicy.js';
import ProductSpecifications from './ProductSpecifications/ProductSpecifications.js';

import ProductCarouselSkeleton from './ProductCarousel/ProductCarouselSkeleton.js';
import ProductBuySkeleton from './ProductBuy/ProductBuySkeleton.js';
import ProductPolicySkeleton from './ProductPolicy/ProductPolicySkeleton.js';
import ProductSpecificationsSkeleton from './ProductSpecifications/ProductSpecificationsSkeleton.js';
import ProductReview from './ProductReview/ProductReview.js';
import ProductReviewSkeleton from './ProductReview/ProductReviewSkeleton.js';
import ProductComment from './ProductComment/ProductComment.js';

const ProductDetail = ({ data, cateName }) => {
	console.log(data, cateName);

	const navigate = useNavigate();
	const imgList = [
		'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
		'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
		'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
	];

	const colorList = [
		{ title: 'Red', choose: true },
		{ title: 'Green', choose: false },
		{ title: 'Yellow', choose: false },
		{ title: 'Blue', choose: false },
	];

	const variantList = [
		{ title: '8GB - 128GB', choose: true },
		{ title: '8GB - 256GB', choose: false },
		{ title: '8GB - 512GB', choose: false },
	];

	const specifications = [
		{ type: 'CPU', value: 'i3, 1215U, 1.2GHz' },
		{
			type: 'RAM',
			value: '8GB, DDR4 2 slot (8GB + 1 empty slot), 3200 MHz',
		},
		{
			type: 'Hard drive',
			value: '512 GB SSD NVMe PCIe',
		},
		{
			type: 'Screen',
			value: '15.6" Full HD (1920 x 1080)',
		},
		{
			type: 'Graphic card',
			value: 'Intel UHD',
		},
		{
			type: 'Connection',
			value: 'Jack 3.5mm, HDMI, 2x USB Type-A, 1x USB Type-C',
		},
		{
			type: 'OS',
			value: 'Windows 11 Home SL',
		},
		{
			type: 'Design',
			value: 'Plastic case - metal back cover',
		},
		{
			type: 'Size, weight',
			value: '359 x 256 x 22.8 ~ 24.5mm, 2.3kg',
		},
		{
			type: 'Launch time',
			value: '2023',
		},
	];

	const detailData = {
		processor: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		ramAndHardDrive: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		screen: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		graphicsAndSound: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		connectionPortsAndExpansionFeatures: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		sizeAndWeight: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		otherInformation: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		selfieCamera: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		mainCamera: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		osAndCpu: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		memoryAndStorage: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		connection: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		battery: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		utilities: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		generalInformation: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		design: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
		configurationAndConnection: [
			{
				type: 'CPU technology',
				value: 'Intel Core i3 Alder Lake - 1215U',
			},
			{ type: 'Multiplier', value: '6' },
			{ type: 'Number of streams', value: '8' },
			{ type: 'CPU Speed', value: '1.20 GHz' },
			{ type: 'Max speed', value: 'Turbo Boost 4.4 GHz' },
		],
	};

	const ratingData = {
		total: 4.566,
		quantity: 24,
		detail: [15, 5, 3, 1, 0],
	};

	const reviewData = [
		{
			userName: 'Kith',
			rate: 5,
			comment:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			img: [
				'https://cdn.tgdd.vn/comment/55707511/loyalty_1696651578452SHSRZ.jpg',
				'https://cdn.tgdd.vn/comment/55530413/loyalty_169526950808511HQD.jpg',
			],
			time: '2 month ago',
		},
		{
			userName: 'Ching',
			rate: 2,
			comment:
				"I've been using this product for over a month and it's still good",
			img: [],
			time: '2 month ago',
		},
		{
			userName: 'Du',
			rate: 3,
			comment:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
			img: [
				'https://cdn.tgdd.vn/comment/55530413/loyalty_16952695080851FONM.jpg',
				'https://cdn.tgdd.vn/comment/54760124/563EBE01-3B5B-4D06-86D6-7C27C4B1A488YAH14.jpeg',
				'https://cdn.tgdd.vn/comment/54760124/932D69B4-5E55-4B8D-A42C-9952D08A1D4EMZ7OZ.jpeg',
			],
			time: '2 month ago',
		},
		{
			userName: 'Phuoc',
			rate: 4,
			comment:
				"I've been using this product for over a month and it's still good",
			img: [
				'https://cdn.tgdd.vn/comment/54746522/F6D2A4A2-2956-4C23-8E7D-5692D0C78064JKQUK.jpeg',
				'https://cdn.tgdd.vn/comment/54746522/07FE1DB7-E23F-47A3-9A96-892ED8AFE00549G72.jpeg',
				'https://cdn.tgdd.vn/comment/54743574/z4482572534681_9422d54b6aac701a9d5d60f26ec38f0bYQBYL.jpg',
			],
			time: '2 month ago',
		},
	];

	const commentData = [
		{
			userName: 'Phuoc',
			comment:
				"I've been using this product for over a month and it's still good",
			time: '04/04/2024',
			reply: [
				{
					userName: 'QTV',
					comment:
						"I've been using this product for over a month and it's still good",
					time: '04/04/2024',
				},
				{
					userName: 'Phuoc',
					comment:
						"I've been using this product for over a month and it's still good",
					time: '04/04/2024',
				},
			],
		},
		{
			userName: 'Kith',
			comment:
				"I've been using this product for over a month and it's still good",
			time: '04/04/2024',
			reply: [
				{
					userName: 'QTV',
					comment:
						"I've been using this product for over a month and it's still good",
					time: '04/04/2024',
				},
				{
					userName: 'Kith',
					comment:
						"I've been using this product for over a month and it's still good",
					time: '04/04/2024',
				},
			],
		},
	];

	return (
		<>
			<Breadcrumbs className="bg-transparent px-4 my-3 tablet:mt-0 text-text flex items-end">
				<Link to="/" className="opacity-60">
					<Typography className="text-text hover:opacity-60">
						<HomeIcon className="w-5 h-5 mb-1 text-text hover:opacity-60" />
					</Typography>
				</Link>
				{/* <Link to={catePath}> */}
				<Typography
					className="text-text hover:opacity-60"
					onClick={() => navigate(-1)}
				>
					{cateName}
				</Typography>
				{/* </Link> */}
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
					{/* <ProductCarouselSkeleton /> */}
				</div>
				{/* buy */}
				<div className="md:col-span-2">
					<ProductBuy
						colorList={colorList}
						variantList={variantList}
					/>
					{/* <ProductBuySkeleton /> */}
				</div>

				{/* product policy */}
				{/* product specifications */}
				<div className="laptop:col-span-2 w-full md:col-span-5 col-span-1">
					<ProductPolicy type={cateName} />
					{/* <ProductPolicySkeleton /> */}
					<ProductSpecifications data={specifications} />
					{/* <ProductSpecificationsSkeleton /> */}
					<DetailedConfiguration data={detailData} type={cateName} />
				</div>

				{/* product reviews */}
				<div className="w-full laptop:col-span-3 md:col-span-5 col-span-1">
					<ProductReview
						ratingData={ratingData}
						reviewData={reviewData}
					/>
					{/* <ProductReviewSkeleton /> */}

					<ProductComment commentData={commentData} />
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
