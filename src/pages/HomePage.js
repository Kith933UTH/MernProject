import React from 'react';

import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

import homeProductLaptop from '../assets/img/home-product-laptop.png';
import homeProductPhone from '../assets/img/home-product-phone.png';
import iconItel from '../assets/img/icon-intel-i9.jpg';
import iconA17 from '../assets/img/icon-a17-pro.jpg';
import HighlightProductList from '../components/Products/HighlightProductList';

const HomePage = () => {
	return (
		<div>
			{/* laptop  */}
			<div className="w-full flex flex-col mt-8 lg:mt-0 lg:flex-row p-4 lg:px-8 gap-4">
				<div className="flex-1 flex flex-col gap-2 justify-center">
					<Typography className="text-3xl lg:text-6xl font-bold font-serif">
						Stealth 16 Mercedes-
						<br />
						AMG Motorsport A13V
					</Typography>
					<Typography className="text-base lg:text-lg font-normal w-full lg:w-[70%]">
						Experience the legacy of luxury and speed. The
						unprecedented collaboration between Mercedes-AMG and MSI
						drives the ultimate luxury gaming experience.
					</Typography>
					<Link to="/laptop">
						<Typography className="text-sm font-semibold px-8 py-2 mt-4 rounded-full bg-highlight flex gap-2 w-min items-center text-main hover:opacity-70">
							<span>Explore </span>
							<FaArrowRightFromBracket />
						</Typography>
					</Link>
				</div>
				<div className="animate-float relative">
					<img
						className="w-[400px] h-[400px] object-contain mx-auto"
						src={homeProductLaptop}
						alt="home-product"
					></img>
					<div className="flex flex-col items-end gap-2 absolute bottom-24 right-0">
						<img
							className="w-20 h-20 object-contain "
							src={iconItel}
							alt="stamp"
						/>
						<Typography className="text-xs text-right select-none">
							Powered by 13th Gen.
							<br /> Intel® Core™ i9 processors
						</Typography>
					</div>
				</div>
			</div>
			{/* phone  */}
			<div className="w-full flex flex-col-reverse lg:flex-row p-4 lg:px-8 gap-8 mt-20">
				<div className="animate-float relative">
					<img
						className="w-[400px] h-[400px] object-contain mx-auto"
						src={homeProductPhone}
						alt="home-product"
					></img>
					<div className="flex flex-col items-end gap-2 absolute bottom-24 right-0">
						<img
							className="w-20 h-20 object-contain "
							src={iconA17}
							alt="stamp"
						/>
						<Typography className="text-xs text-right select-none">
							A17 Pro processor.
							<br /> New 16‑core Neural Engine
						</Typography>
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-2 justify-center lg:items-end">
					<Typography className="text-3xl lg:text-6xl font-bold font-serif lg:text-right">
						iPhone 15 Pro
					</Typography>
					<Typography className="text-base lg:text-lg font-normal w-full lg:w-[70%] lg:text-right">
						The first iPhone to feature an aerospace‑grade titanium
						design, using the same alloy that spacecraft use for
						missions to Mars.
					</Typography>
					<Link to="/phone">
						<Typography className="text-sm font-semibold px-8 py-2 mt-4 rounded-full bg-highlight flex gap-2 w-min items-center text-main hover:opacity-70">
							<span>Explore </span>
							<FaArrowRightFromBracket />
						</Typography>
					</Link>
				</div>
			</div>

			<div className="w-full mt-36 border-solid border-t-[1px] border-gray-600">
				<Typography className="text-3xl font-bold text-center py-10">
					Highlight Products
				</Typography>
				<HighlightProductList />
			</div>
		</div>
	);
};

export default HomePage;
