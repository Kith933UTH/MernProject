import React, { useState } from 'react';
import Navbar_H from './Navbar_H';

import {
	Navbar,
	IconButton,
	Input,
	Badge,
	Button,
} from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';


const Header = () => {

	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState('');

	const handleSearchInputChange = (e) => {
		setSearchValue(e.target.value.toString());
	};

	const handleSubmitSearchAction = () => {
		navigate(`/search?key=${searchValue}`);
	};

	return (
		<>
		<Navbar className="mx-auto bg-transparent max-w-[1200px] px-0 py-3 shadow-none">
			<div className="flex flex-wrap items-center justify-between gap-y-4 text-text">
				<Link
					to="/"
					className="text-xl font-bold mr-8 cursor-pointer py-1.5"
				>
					TechShop
				</Link>
				<div className="relative flex w-full gap-2 md:w-max ">
					<Input
						type="text"
						placeholder="Search..."
						icon={
							<MagnifyingGlassIcon
								onClick={handleSubmitSearchAction}
								className="h-4 w-4 cursor-pointer"
							/>
						}
						className="border-none bg-main rounded-3xl pl-4 text-text shadow-lg shadow-gray-900/5 placeholder:text-text placeholder:opacity-100 "
						labelProps={{
							className: 'hidden',
						}}
						value={searchValue}
						onChange={handleSearchInputChange}
						onKeyDown={(e) =>
							e.keyCode === 13 && handleSubmitSearchAction()
						}
						containerProps={{ className: 'min-w-[288px]' }}
					/>
				</div>

				<div className="ml-auto flex gap-1 md:mr-4">
					<IconButton variant="text" color="white">
						<HeartIcon className="h-6 w-6" />
					</IconButton>
					<Badge
						content="5"
						className="min-w-5 min-h-5 hover:opacity-80"
					>
						<IconButton variant="text" color="white">
							<ShoppingCartIcon className="h-6 w-6" />
						</IconButton>
					</Badge>
					<div className="ml-4 flex gap-3">
						<Button
							variant="filled"
							className="text-text bg-transparent border-2 border-main"
						>
							Sign in
						</Button>
						<Button variant="filled" className="bg-main text-text">
							Login
						</Button>
					</div>
				</div>
			</div>
		</Navbar>
		<Navbar_H/>
	</>
	);

};

export default Header;
