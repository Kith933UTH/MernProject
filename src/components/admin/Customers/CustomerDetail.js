import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IconButton, Typography } from '@material-tailwind/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import AdminWideLayout from '../../../layouts/AdminWideLayout';

const CustomerDetail = () => {
	const { customerId } = useParams();
	console.log(customerId);
	const navigate = useNavigate();

	const customer = {
		name: 'Kith',
		phone: '0829751569',
		email: 'kith@ut.edu.vn',
		gender: 'male',
		address: [
			{
				address:
					'Binh Dai Bus Station, Binh Thoi Commune, Binh Dai District, Ben Tre Province',
				defaultAddress: true,
			},
			{
				address:
					'Bus station, Binh Thoi Commune, Binh Dai District, Ben Tre Province',
				defaultAddress: false,
			},
		],
	};
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
	];

	return (
		<AdminWideLayout>
			<div className="text-main">
				{/* title  */}
				<div className="flex gap-4 items-center">
					<IconButton
						size="sm"
						variant="outlined"
						className="border-main text-main focus:ring-transparent rounded-sm"
						onClick={() => navigate(-1)}
					>
						<ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
					</IconButton>

					<Typography className="text-xl font-semibold my-4">
						Customer:{' '}
						<span className="text-admin">{customer.name}</span>
					</Typography>
				</div>
				<div className="w-full grid grid-cols-5 gap-4">
					{/* Order history  */}
					<div className="w-full h-min col-span-3 bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
						<Typography className="p-4 text-base font-semibold">
							Orders History
						</Typography>
						{/* <div className="grid grid-cols-[repeat(2,minmax(0,_1fr))_100px_100px] gap-4 p-4 border-b-[1px] border-solid border-gray-300 px-8">
							<Typography className="text-sm font-bold">
								Order ID
							</Typography>
							<Typography className="text-sm font-bold">
								Date
							</Typography>
							<Typography className="text-sm font-bold">
								Status
							</Typography>
							<Typography className="text-sm font-bold">
								Total
							</Typography>
						</div> */}
						{orderList.length > 0 ? (
							<>
								{orderList.map((order) => (
									<div
										key={order.id}
										className="grid grid-cols-[repeat(2,minmax(0,_1fr))_90px_90px] gap-4 p-4 border-b-[1px] border-solid border-gray-300 content-center"
									>
										<Link
											to={
												'/admin/orders/' +
												order.id.toString()
											}
										>
											<Typography className="text-sm font-semibold text-blue-600 hover:underline ">
												#{order.id}
											</Typography>
										</Link>
										<Typography className="text-sm font-medium">
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
										) : order.status === 'processing' ? (
											<Typography className="text-xs h-min rounded-full bg-gray-400 text-white w-min px-2 py-1">
												Processing
											</Typography>
										) : (
											<Typography className="text-xs h-min rounded-full bg-red-600 text-white w-min px-2 py-1">
												Cancelled
											</Typography>
										)}
										<Typography className="text-sm font-medium text-right">
											{order.total}
										</Typography>
									</div>
								))}
							</>
						) : (
							<Typography className="text-lg font-medium my-2">
								No orders yet.
							</Typography>
						)}
					</div>
					{/* information  */}
					<div className="w-full h-min col-span-2 bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
						<Typography className="p-4 text-base font-semibold">
							Customer
						</Typography>
						<div className="flex flex-col gap-4 p-4 pt-0 ">
							<div className="grid grid-cols-[70px_1fr] gap-4">
								<Typography className="text-sm font-medium">
									Name:
								</Typography>
								<Typography className="text-sm font-medium">
									{customer.name}
								</Typography>
							</div>
							<div className="grid grid-cols-[70px_1fr] gap-4">
								<Typography className="text-sm font-medium">
									Email:
								</Typography>
								<Typography className="text-sm font-medium">
									{customer.email}
								</Typography>
							</div>
							<div className="grid grid-cols-[70px_1fr] gap-4">
								<Typography className="text-sm font-medium">
									Phone:
								</Typography>
								<Typography className="text-sm font-medium">
									{customer.phone}
								</Typography>
							</div>
							<div className="grid grid-cols-[70px_1fr] gap-4">
								<Typography className="text-sm font-medium">
									Gender:
								</Typography>
								{customer.gender === 'male' ? (
									<Typography className="text-sm font-medium">
										Male
									</Typography>
								) : (
									<Typography className="text-sm font-medium">
										Female
									</Typography>
								)}
							</div>
						</div>

						<Typography className="p-4 text-base font-semibold border-t-[1px] border-solid border-gray-300">
							Address List
						</Typography>
						<div className="flex flex-col gap-4 p-4 pt-0 ">
							{customer.address.map((item, index) => (
								<div
									key={item.address}
									className="flex flex-col gap-2"
								>
									<Typography className="text-sm font-medium">
										{item.address}
									</Typography>
									{item.defaultAddress && (
										<Typography className="w-min text-xs font-medium rounded-full bg-admin text-white py-1 px-2">
											Default
										</Typography>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</AdminWideLayout>
	);
};

export default CustomerDetail;
