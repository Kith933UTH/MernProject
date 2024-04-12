import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { DrawerSideBar } from '../Sidebar/DrawerSideBar';
import { Breadcrumbs, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import ProductList from '../Products/ProductList';
import { useSelector } from 'react-redux';
import { productFilterSelector } from '../../redux/Selector/ProductSelector';

const Category = ({ type }) => {
	const filters = useSelector(productFilterSelector);

	return (
		<>
			<div className="w-full flex flex-col gap-4">
				<div className="flex flex-row justify-between items-end px-4 mb-4">
					<Breadcrumbs className="bg-transparent p-0 mt-3 tablet:mt-0 text-text">
						<Link to="/" className="opacity-60">
							<HomeIcon className="w-5 h-5 text-text hover:opacity-60" />
						</Link>
						<Link to={window.location.pathname}>
							<Typography className="text-highlight hover:opacity-60">
								{type.title}
							</Typography>
						</Link>
					</Breadcrumbs>
					<div className="flex flex-row gap-1 items-end">
						<div>
							<Typography className="text-2xl tablet:text-3xl font-semibold">
								{type.title}
							</Typography>
						</div>
						<div className="tablet:hidden">
							<DrawerSideBar filters={filters} />
						</div>
					</div>
				</div>
				<div className="w-full flex flex-row gap-4">
					<div className="w-full tablet:w-1/6 tablet:block hidden">
						<Sidebar filters={filters} />
					</div>
					<div className="w-full tablet:w-5/6">
						<ProductList type={type.path} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Category;
