import React, { useCallback, useRef, useState } from 'react';
import { IconButton, Badge, Tooltip } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import {
	HeartIcon,
	ShoppingCartIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import SearchDrawer from './SearchDrawer';
import Cart from '../Cart/Cart';

const Header = () => {
	//Search form handler
	const searchInputRef = useRef();
	const [openSearch, setOpenSearch] = useState(false);
	const openSearchSection = () => {
		setOpenSearch(true);
		openCart && searchInputRef.current.focus();
	};
	const closeSearchSection = useCallback(() => setOpenSearch(false), []);

	//Cart handler
	const [openCart, setOpenCart] = useState(false);
	const openCartSection = () => {
		setOpenCart(true);
	};
	const closeCartSection = useCallback(() => setOpenCart(false), []);

	return (
		<>
			<header className="mx-auto relative bg-transparent max-w-[1200px] py-3 shadow-none px-6 desktop:px-0 overflow-visible">
				<div className="flex flex-wrap items-center justify-between gap-y-4 text-text overflow-visible">
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
						<Tooltip
							content="Login"
							placement="bottom"
							className="bg-main"
						>
							<IconButton variant="text" color="white">
								<UserIcon className="h-6 w-6" />
							</IconButton>
						</Tooltip>
					</div>
				</div>
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
