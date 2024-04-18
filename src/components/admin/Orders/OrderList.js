import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import { ScrollToTop } from '../../../utils';
import { Pagination } from '../Pagination';
import AdminWideLayout from '../../../layouts/AdminWideLayout';

const perPage = 10;

const OrderList = () => {
	const orderList = [
		{
			id: '01840SH24020736918',
			status: 'completed',
			total: '5.265.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH23020695187',
			status: 'pending',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH23020695156',
			status: 'cancelled',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH230206951sg',
			status: 'processing',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH230206951ga',
			status: 'processing',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH230206951ew',
			status: 'pending',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH230206951kg',
			status: 'pending',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH230206951et',
			status: 'pending',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH230206951kj',
			status: 'pending',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH23020695eya',
			status: 'pending',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
		{
			id: '00047SH23020695rey',
			status: 'pending',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			email: 'nguyenkiet51569@gmail.com',
			payment: 'COD',
		},
	];

	const [active, setActive] = useState(1);
	const lengthOfPage = Math.ceil(orderList.length / perPage);

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

	const handleSubmitSearchByOrderID = (e) => {
		console.log(e.target.value);
	};
	const handleSubmitSearchByCustomerEmail = (e) => {
		console.log(e.target.value);
	};

	return (
		<AdminWideLayout>
			<div className="text-main">
				<div className="flex justify-between">
					<Typography className="text-xl font-semibold my-6">
						Orders
					</Typography>
				</div>
				<div className="w-full bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
					<div className="grid grid-cols-[repeat(3,minmax(0,_1fr))_100px_100px] gap-4 p-4 border-b-[1px] border-solid border-gray-300 px-8">
						<div className="flex flex-col gap-2">
							<Typography className="text-sm font-bold">
								Order ID
							</Typography>
							<input
								type="text"
								placeholder="Order ID"
								spellCheck="false"
								className="h-min font-sans transition-all text-sm font-bold leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
								onKeyDown={(e) =>
									e.keyCode === 13 &&
									handleSubmitSearchByOrderID(e)
								}
							></input>
						</div>
						<div className="flex flex-col gap-2">
							<Typography className="text-sm font-bold">
								Customer Email
							</Typography>
							<input
								type="text"
								placeholder="Customer Email"
								spellCheck="false"
								className="h-min font-sans transition-all text-sm font-bold leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
								onKeyDown={(e) =>
									e.keyCode === 13 &&
									handleSubmitSearchByCustomerEmail(e)
								}
							></input>
						</div>
						<Typography className="text-sm font-bold">
							Date
						</Typography>
						<Typography className="text-sm font-bold">
							Status
						</Typography>
						<Typography className="text-sm font-bold">
							Total
						</Typography>
					</div>
					{orderList.length > 0 ? (
						<>
							{orderList
								.map((order, index) =>
									index < active * perPage &&
									index >= (active - 1) * perPage ? (
										<div
											key={order.id}
											className="grid grid-cols-[repeat(3,minmax(0,_1fr))_100px_100px] gap-4 p-4 border-b-[1px] border-solid border-gray-300 px-8 content-center"
										>
											<Link
												to={
													'/admin/orders/' +
													order.id.toString()
												}
											>
												<Typography className="text-sm font-semibold hover:underline ">
													{order.id}
												</Typography>
											</Link>
											<Typography className="text-sm">
												{order.email}
											</Typography>
											<Typography className="text-sm">
												{order.orderAt}
											</Typography>
											{order.status === 'completed' ? (
												<Typography className="text-xs h-min rounded-full bg-green-600 text-white w-min px-2 py-1">
													Completed
												</Typography>
											) : order.status === 'pending' ? (
												<Typography className="text-xs h-min rounded-full bg-gray-400 text-white w-min px-2 py-1">
													Pending
												</Typography>
											) : order.status ===
											  'processing' ? (
												<Typography className="text-xs h-min rounded-full bg-gray-400 text-white w-min px-2 py-1">
													Processing
												</Typography>
											) : (
												<Typography className="text-xs h-min rounded-full bg-red-600 text-white w-min px-2 py-1">
													Cancelled
												</Typography>
											)}
											<Typography className="text-sm">
												{order.total}
											</Typography>
										</div>
									) : null
								)
								.filter((item) => item !== null)}
							<Pagination
								lengthOfPage={lengthOfPage}
								active={active}
								next={next}
								prev={prev}
							/>
						</>
					) : (
						<Typography className="text-lg font-medium my-2">
							No orders yet.
						</Typography>
					)}
				</div>
			</div>
		</AdminWideLayout>
	);
};

export default OrderList;
