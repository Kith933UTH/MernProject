import React, { useCallback, useRef, useState } from 'react';
import { IconButton, Badge, Tooltip } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import {
	Bars3Icon,
	HeartIcon,
	ShoppingCartIcon,
	UserIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import SearchDrawer from './SearchDrawer';
import Cart from '../Cart/Cart';
import HeaderNavbar from '../Navbar/HeaderNavbar';

const Header = () => {
	//Search form handler
	const searchInputRef = useRef();
	const [openSearch, setOpenSearch] = useState(false);
	const openSearchSection = () => {
		setOpenSearch(true);
		searchInputRef.current.focus();
	};
	const closeSearchSection = useCallback(() => setOpenSearch(false), []);

	//Cart handler
	const [openCart, setOpenCart] = useState(false);
	const openCartSection = () => {
		setOpenCart(true);
	};
	const closeCartSection = useCallback(() => setOpenCart(false), []);

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
			<header className="mx-auto relative bg-transparent max-w-[1200px] pt-3 shadow-none px-4 desktop:px-0 overflow-visible">
				<div className="flex flex-wrap items-center justify-between gap-y-4 text-text overflow-visible mb-2 border-solid border-b-[1px] border-slate-900 tablet:border-none pb-2 px-4">
					{/* Logo link to home page */}
					<Link
						to="/"
						className="text-2xl font-bold cursor-pointer py-1.5 px-0"
					>
						TechShop
					</Link>

					<div className="ml-auto flex gap-1 sm:gap-4 -mr-2">
						{/* Search button  */}
						<Tooltip
							content="Search"
							placement="bottom"
							className="bg-main"
						>
							<IconButton
								onClick={openSearchSection}
								variant="text"
								color="white"
							>
								<MagnifyingGlassIcon className="h-6 w-6" />
							</IconButton>
						</Tooltip>
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
						<Badge
							content="5"
							className="min-w-5 min-h-5 hover:opacity-80"
						>
							<Tooltip
								content="Shopping cart"
								placement="bottom"
								className="bg-main"
							>
								<IconButton
									variant="text"
									color="white"
									onClick={openCartSection}
								>
									<ShoppingCartIcon className="h-6 w-6" />
								</IconButton>
							</Tooltip>
						</Badge>
						{/* user  */}
						<Tooltip
							content="Login"
							placement="bottom"
							className="bg-main"
						>
							<IconButton variant="text" color="white">
								<UserIcon className="h-6 w-6" />
							</IconButton>
						</Tooltip>

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

			{/* Search form  */}
			<SearchDrawer
				open={openSearch}
				closeSearchSection={closeSearchSection}
				ref={searchInputRef}
			/>

			{/* Cart  */}
			<Cart open={openCart} closeDrawerRight={closeCartSection} />
		</>
	);
};

export default Header;
