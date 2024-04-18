import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../layouts/AdminLayout';
import { Typography } from '@material-tailwind/react';
import { ScrollToTop } from '../../../utils';
import { Pagination } from '../Pagination';

const perPage = 10;

const ProductsList = ({ title, url }) => {
	const productList = [
		{
			id: 'recZkNf2kwmdBcqd0',
			name: 'accent chair',
			brand: 'marcos',
		},
		{
			id: 'recEHmzvupvT8ZONH',
			name: 'albany sectional',
			brand: 'liddy',
		},
		{
			id: 'rec5NBwZ5zCD9nfF0',
			name: 'albany table',
			brand: 'liddy',
		},
		{
			id: 'recd1jIVIEChmiwhe',
			name: 'armchair',
			brand: 'marcos',
		},
		{
			id: 'recotY5Nh00DQFdkm',
			name: 'dining table',
			brand: 'ikea',
		},
		{
			id: 'rec1Ntk7siEEW9ha1',
			name: 'emperor bed',
			brand: 'ikea',
		},
		{
			id: 'recZkNf2kwmdBcqd6',
			name: 'accent chair',
			brand: 'marcos',
		},
		{
			id: 'recEHmzvupvT8ZOsh',
			name: 'albany sectional',
			brand: 'liddy',
		},
		{
			id: 'rec5NBwZ5zCD9nf36',
			name: 'albany table',
			brand: 'liddy',
		},
		{
			id: 'recd1jIVIEChmiwjd',
			name: 'armchair',
			brand: 'marcos',
		},
		{
			id: 'recotY5Nh00DQFdgl',
			name: 'dining table',
			brand: 'ikea',
		},
		{
			id: 'rec1Ntk7siEEW9hadh',
			name: 'emperor bed',
			brand: 'ikea',
		},
	];

	const [active, setActive] = useState(1);
	const lengthOfPage = Math.ceil(productList.length / perPage);

	useEffect(() => setActive(1), [url]);

	const next = () => {
		if (active === lengthOfPage) return;
		setActive(active + 1);
	};

	const prev = () => {
		if (active === 1) return;
		setActive(active - 1);
	};

	useEffect(() => {
		ScrollToTop();
	}, [active]);

	const handleSubmitSearchByName = (e) => {
		console.log(e.target.value);
	};
	const handleSubmitSearchByBrand = (e) => {
		console.log(e.target.value);
	};

	return (
		<AdminLayout>
			<div className="text-main">
				<div className="flex justify-between">
					<Typography className="text-xl font-semibold my-6">
						{title}
					</Typography>
					<div className="flex gap-4 items-center">
						<Link to={'/admin/products/' + url + '/attributes'}>
							<Typography className="py-2 px-4 text-sm bg-white font-semibold border-[1px] border-solid border-gray-300 rounded-md hover:bg-gray-300">
								Attribute
							</Typography>
						</Link>
						<Link to={'/admin/products/' + url + '/new'}>
							<Typography className="py-2 px-4 text-sm text-white font-semibold bg-admin border-[1px] border-solid border-gray-300 rounded-md hover:bg-strongAdmin">
								New {title}
							</Typography>
						</Link>
					</div>
				</div>
				<div className="w-full bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
					<div className="grid grid-cols-[50px_repeat(4,minmax(0,_1fr))] gap-4 p-4 border-b-[1px] border-solid border-gray-300 px-8">
						<Typography className="text-sm font-bold">#</Typography>
						<div className="flex flex-col gap-2  col-span-2">
							<Typography className="text-sm font-bold">
								Product Name
							</Typography>
							<input
								type="text"
								placeholder="Product name"
								spellCheck="false"
								className="h-min font-sans transition-all text-sm font-bold leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md w-[50%] focus:border-admin"
								onKeyDown={(e) =>
									e.keyCode === 13 &&
									handleSubmitSearchByName(e)
								}
							></input>
						</div>
						<div className="flex flex-col gap-2 ">
							<Typography className="text-sm font-bold">
								Brand
							</Typography>
							<input
								type="text"
								placeholder="Brand"
								spellCheck="false"
								className="h-min font-sans transition-all text-sm font-bold leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
								onKeyDown={(e) =>
									e.keyCode === 13 &&
									handleSubmitSearchByBrand(e)
								}
							></input>
						</div>
						<Typography className="text-sm font-bold text-right mr-10">
							Modify
						</Typography>
					</div>
					{productList.length > 0 ? (
						<>
							{productList.map((product, index) =>
								index < active * perPage &&
								index >= (active - 1) * perPage ? (
									<div
										key={product.id}
										className="grid grid-cols-[50px_repeat(4,minmax(0,_1fr))] gap-4 p-4 border-b-[1px] border-solid border-gray-300 px-8"
									>
										<Typography className="text-sm font-semibold">
											{index + 1}
										</Typography>
										<Link
											to={
												'/admin/products/' +
												url +
												'/' +
												product.id
											}
											className="col-span-2"
										>
											<Typography className="text-sm font-semibold hover:underline ">
												{product.name}
											</Typography>
										</Link>
										<Typography className="text-sm">
											{product.brand}
										</Typography>
										<div className="flex gap-2 justify-end">
											<Link
												to={
													'/admin/products/' +
													url +
													'/' +
													product.id
												}
											>
												<Typography className="py-1 px-2 text-sm font-semibold border-[1px] border-solid border-gray-300 rounded-md hover:bg-gray-300">
													Edit
												</Typography>
											</Link>

											<Typography className="py-1 px-2 text-sm font-semibold border-[1px] border-solid border-gray-300 rounded-md hover:bg-red-700 hover:text-white cursor-pointer">
												Delete
											</Typography>
										</div>
									</div>
								) : null
							)}
							<Pagination
								lengthOfPage={lengthOfPage}
								active={active}
								next={next}
								prev={prev}
							/>
						</>
					) : (
						<Typography className="text-lg font-medium my-2">
							No product yet.
						</Typography>
					)}
				</div>
			</div>
		</AdminLayout>
	);
};

export default ProductsList;
