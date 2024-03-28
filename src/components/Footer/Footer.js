// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../Products/ProductsSlice';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Footer() {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchProducts());
	// }, [dispatch]);

	// const product = useSelector((state) => state.products);

	// console.log(product);

	return (
		<footer className="bg-main shadow-md shadow-main max-w-[1200px] xl:mx-auto rounded-2xl py-4 px-8 mx-4">
			<div className="flex flex-row flex-wrap items-center justify-center gap-y-2 gap-x-12 bg-transparent text-center text-text md:justify-between">
				<Typography
					variant="h2"
					className="text-xl font-bold cursor-pointer py-1.5 px-0"
					onClick={() => window.scrollTo(0, 0)}
				>
					TechShop
				</Typography>
				<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
					<li>
						<Link
							to="about"
							className="transition-colors hover:opacity-60 text-text"
						>
							<Typography
								variant="paragraph"
								className="text-base font-bold cursor-pointer"
								onClick={() => window.scrollTo(0, 0)}
							>
								About Us
							</Typography>
						</Link>
					</li>
					<li>
						<Link
							to="policy"
							className="transition-colors hover:opacity-60 text-text"
						>
							<Typography
								variant="paragraph"
								className="text-base font-bold cursor-pointer"
								onClick={() => window.scrollTo(0, 0)}
							>
								Policy
							</Typography>
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							className="transition-colors hover:opacity-60 text-text"
						>
							<Typography
								variant="paragraph"
								className="text-base font-bold cursor-pointer"
								onClick={() => window.scrollTo(0, 0)}
							>
								Contact Us
							</Typography>
						</Link>
					</li>
				</ul>
			</div>
			<hr className="my-2 border-blue-gray-50" />
			<Typography className="text-text text-center font-normal">
				&copy; 2023 TechShop
			</Typography>
		</footer>
	);
}

export default Footer;
