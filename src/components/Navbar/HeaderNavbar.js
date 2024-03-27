import React from 'react';
import {
	Navbar,
	Collapse,
	Typography,
	List,
	Menu,
	MenuHandler,
	MenuList,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import CateList from '../../config/CateList';
import { Link, NavLink } from 'react-router-dom';

//Nav item with subnav
function NavItemWithMenu({ data, isMobile, closeNav }) {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const renderItems = data?.children.map(({ icon, title, path }, key) => (
		<Link
			to={path}
			key={key}
			onClick={() => {
				isMobile && closeNav();
				isMobileMenuOpen && setIsMobileMenuOpen(false);
			}}
			className="text-base flex items-center gap-2 py-1 pr-4 font-medium text-text hover:opacity-60"
		>
			<div className="flex items-center gap-3 rounded-lg">
				<div className="flex items-center justify-center rounded-lg p-2 ">
					{icon}
				</div>
				<div>{title}</div>
			</div>
		</Link>
	));

	return (
		<>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler className="hover:opacity-60">
					<Typography
						as="div"
						variant="small"
						className="font-medium"
					>
						<Typography
							className="text-base flex items-center gap-2 py-1 pr-4 font-medium text-text cursor-pointer"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							{data.icon}
							{data.title}

							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? 'rotate-180' : ''
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? 'rotate-180' : ''
								}`}
							/>
						</Typography>
					</Typography>
				</MenuHandler>
				<MenuList className="bg-main hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden text-text">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</>
	);
}

function NavList({ isMobile, closeNav }) {
	return (
		<List className="p-0 py-2 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
			{CateList.map((cate) => {
				if (cate.children)
					return (
						<NavItemWithMenu
							isMobile={isMobile}
							closeNav={closeNav}
							key={cate.path}
							data={cate}
						/>
					);
				return (
					<NavLink
						key={cate.path}
						to={cate.path}
						onClick={() => isMobile && closeNav()}
						className="flex items-center gap-2 py-1 pr-4 font-medium text-text hover:opacity-60"
					>
						{cate.icon}
						{cate.title}
					</NavLink>
				);
			})}
		</List>
	);
}

const HeaderNavbar = ({ open, closeNav }) => {
	const isMobile = window.innerWidth < 960;

	return (
		<Navbar className="flex-1 px-4 py-0 bg-main text-base shadow-md shadow-main">
			<div className="flex items-center justify-between">
				<div className="hidden lg:block">
					<NavList />
				</div>
			</div>
			<Collapse open={open}>
				<NavList isMobile={isMobile} closeNav={closeNav} />
			</Collapse>
		</Navbar>
	);
};

export default React.memo(HeaderNavbar);
