import React, { useCallback, useState } from 'react';
import { IconButton, Tooltip } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { Bars3Icon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import SearchDrawer from './SearchDrawer';
import Cart from '../Cart/Cart';
import HeaderNavbar from '../Navbar/HeaderNavbar';
import AuthForm from '../Users/AuthForm';

const Header = () => {
	//Nav handler
	const [openNav, setOpenNav] = useState(false);
	const closeNavMobileSection = useCallback(() => setOpenNav(false), []);
	React.useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 960) {
				closeNavMobileSection();
			}
		});
	}, [closeNavMobileSection]);

	return (
		<>
			<header className="mx-auto bg-transparent max-w-[1200px] pt-3 shadow-none px-4 desktop:px-0 overflow-visible">
				<div className="flex flex-wrap items-center justify-between gap-y-4 text-text overflow-visible mb-2 border-solid border-b-[1px] border-slate-900 tablet:border-none pb-2 px-4 tablet:px-0">
					{/* Logo link to home page */}
					<Link
						to="/"
						className="text-2xl font-bold cursor-pointer py-1.5 px-0"
					>
						TechShop
					</Link>

					<div className="ml-auto flex sm:gap-4 -mr-2 lg:mr-3">
						{/* Search button  */}
						<SearchDrawer />

						{/* Wish list  */}
						<Tooltip
							content="Wishlist"
							placement="bottom"
							className="bg-main"
						>
							<IconButton variant="text" color="white">
								<HeartIcon className="h-6 w-6" />
							</IconButton>
						</Tooltip>

						{/* Cart  */}
						<Cart />

						{/* user  */}
						<AuthForm />

						{/* nav mobile  */}
						<IconButton
							variant="text"
							className="lg:hidden text-text"
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<XMarkIcon
									className="h-6 w-6"
									strokeWidth={2}
								/>
							) : (
								<Bars3Icon
									className="h-6 w-6"
									strokeWidth={2}
								/>
							)}
						</IconButton>
					</div>
				</div>
				<HeaderNavbar open={openNav} closeNav={closeNavMobileSection} />
			</header>
		</>
	);
};

export default Header;
