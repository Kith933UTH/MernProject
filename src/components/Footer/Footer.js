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
		<footer className="max-w-[1200px] xl:mx-auto py-4 mx-4">
			<div className="bg-main px-8 py-3 shadow-md shadow-main rounded-2xl flex flex-row flex-wrap items-center justify-center sm:justify-between gap-y-2 gap-x-12 text-center text-text md:justify-between">
				<Typography
					variant="h2"
					className="text-xl font-bold cursor-pointer py-1.5 px-0"
					onClick={() => window.scrollTo(0, 0)}
				>
					TechShop
				</Typography>
				<hr className="my-1 border-blue-gray-50 w-[90%] mx-auto sm:hidden" />
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
			<hr className="my-2 border-blue-gray-50 w-[90%] mx-auto hidden sm:block " />
			<Typography className="text-text text-center font-normal mt-6 -mb-3">
				&copy; 2023 TechShop
			</Typography>
		</footer>
	);
}

export default Footer;
