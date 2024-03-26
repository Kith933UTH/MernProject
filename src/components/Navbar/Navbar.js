import React from 'react';
import {
	Navbar,
	Collapse,
	Typography,
	List,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaLaptop, FaHeadphonesAlt, FaTabletAlt } from 'react-icons/fa';
import { IoIosPhonePortrait } from 'react-icons/io';
import { IoWatchOutline } from 'react-icons/io5';
const navListMenuItems = [
	{
		title: 'Charging',
	},
	{
		title: 'Cable',
	},
	{
		title: 'Head Phone',
	},
	{
		title: 'Mouse',
	},
	{
		title: 'Keybroad',
	},
];

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const renderItems = navListMenuItems.map(({ title }, key) => (
		<a href="#" key={key} className="">
			<MenuItem className="flex items-center gap-3 rounded-lg hover:bg-blue-gray-900">
				<div>
					<Typography
						variant="h6"
						color="blue-gray"
						className="min-w- flex items-center text-sm font-bold text-text"
					>
						{title}
					</Typography>
				</div>
			</MenuItem>
		</a>
	));

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography as="div" variant="" className="font-medium ">
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-medium text-text bg-background "
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							<FaHeadphonesAlt /> Accessory
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? 'rotate-180' : ''
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden  ${
									isMobileMenuOpen ? 'rotate-180' : ''
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block p-0 bg-background border-solid border-white border-sm ">
					<ul className="flex flex-col gap-y-2 outline-none outline-0 relative">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="absolute lg:hidden ">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavListForItems() {
	return (
		<List className="mt-4 mb-6 p-0 sm:mt-0 sm:mb-0 sm:flex-row sm:p-1 min-w-0">
			<Typography
				as="a"
				href="#"
				variant="medium"
				color="blue-gray"
				className="font-medium"
			>
				<ListItem className="flex items-center gap-2 py-2 pr-4 text-text">
					<IoIosPhonePortrait /> Phone
				</ListItem>
			</Typography>
			<Typography
				as="a"
				href="#"
				variant="medium"
				color="blue-gray"
				className="font-medium"
			>
				<ListItem className="flex items-center gap-2 py-2 pr-4 text-text">
					<FaLaptop /> Laptop
				</ListItem>
			</Typography>
			<Typography
				as="a"
				href="#"
				variant="medium"
				color="blue-gray"
				className="font-medium"
			>
				<ListItem className="flex items-center gap-2 py-2 pr-4  text-text">
					<FaTabletAlt /> Tablet
				</ListItem>
			</Typography>
			<NavListMenu />
			<Typography
				as="a"
				href="#"
				variant="medium"
				color="blue-gray"
				className="font-medium"
			>
				<ListItem className="flex items-center gap-2 py-2 pr-4  text-text ">
					<IoWatchOutline /> Smart Watch
				</ListItem>
			</Typography>
		</List>
	);
}

const Navbar_H = () => {
	return (
		<Navbar className="mx-auto w-full max-w-[1200px] px-0 bg-background pt-0">
			<div className="flex items-center gap-x-1">
				<NavListForItems />
			</div>
		</Navbar>
	);
};

export default Navbar_H;
