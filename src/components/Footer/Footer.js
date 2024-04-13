import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="max-w-[1200px] xl:mx-auto py-4 mx-4 pb-8">
			<div className="bg-main px-3 md:px-8 py-3 shadow-md shadow-main rounded-2xl flex flex-row flex-wrap items-center justify-center sm:justify-between gap-y-2 gap-x-12 text-center text-text ">
				<Typography
					variant="h2"
					className="text-xl font-bold cursor-pointer py-1.5 px-0"
					onClick={() => window.scrollTo(0, 0)}
				>
					TechShop
				</Typography>
				<hr className="my-1 border-blue-gray-50 w-[90%] mx-auto sm:hidden" />
				<ul className="flex flex-wrap items-center gap-2 sm:gap-x-8 flex-1 justify-between px-2 sm:px-0 sm:justify-end">
					<li>
						<Link
							to="about"
							className="transition-colors hover:opacity-60 text-text"
						>
							<Typography
								variant="paragraph"
								className="text-sm md:text-base font-bold cursor-pointer"
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
								className="text-sm md:text-base font-bold cursor-pointer"
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
								className="text-sm md:text-base font-bold cursor-pointer"
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
