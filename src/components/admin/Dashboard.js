import React from 'react';
import Chart from 'react-apexcharts';
import AdminLayout from '../../layouts/AdminLayout';
import { Typography } from '@material-tailwind/react';
import { FormatNumber } from '../../utils';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	const saleData = {
		ordersQuantity: 150,
		completedQuantity: 70,
		cancelledQuantity: 10,
		pendingQuantity: 40,
		processingQuantity: 30,
		revenue: 111235366,
	};

	const customers = 74;
	const products = 156;

	const chartConfig = {
		type: 'pie',
		width: 220,
		height: 220,
		series: [
			saleData.completedQuantity,
			saleData.pendingQuantity,
			saleData.processingQuantity,
			saleData.cancelledQuantity,
		],
		options: {
			labels: ['Completed', 'Pending', 'Processing', 'Cancelled'],
			chart: {
				toolbar: {
					show: false,
				},
			},
			title: {
				show: '',
			},
			dataLabels: {
				enabled: true,
			},
			colors: ['#86efac', '#a5f3fc', '#bfdbfe', '#fca5a5'],
			legend: {
				show: false,
			},
			plotOptions: {
				pie: {
					expandOnClick: false,
				},
			},
		},
	};

	const latestOrderList = [
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
	];

	return (
		<AdminLayout>
			<div className="text-main">
				<div className="flex justify-between">
					<Typography className="text-xl font-semibold my-6">
						Dashboard
					</Typography>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="col-span-2 flex flex-col gap-4">
						{/* sale information  */}
						<div className="w-full h-min bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
							<Typography className="p-5 text-base font-semibold">
								Lifetime Sales
							</Typography>
							<div className="flex flex-col gap-2 p-5 pt-0">
								<div className="flex gap-4 items-center">
									<Typography className="text-sm font-medium">
										Number of orders:{' '}
										<span className="text-admin font-semibold">
											{saleData.ordersQuantity}
										</span>
									</Typography>
								</div>
								<div className="flex gap-4 items-center">
									<Typography className="text-sm font-medium">
										Lifetime Revenue:{' '}
										<span className="text-admin font-semibold">
											{FormatNumber(saleData.revenue)} VND
										</span>
									</Typography>
								</div>
							</div>
						</div>
						{/* latest orders  */}
						<div className="w-full h-min bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
							<div className="flex justify-between items-center">
								<Typography className="p-5 text-base font-semibold">
									Latest Orders
								</Typography>
								<Link to="/admin/orders">
									<Typography className="hover:underline mx-5 text-blue-600 text-sm font-medium">
										All orders
									</Typography>
								</Link>
							</div>
							{latestOrderList.length > 0 ? (
								<>
									{latestOrderList.map((order, index) => (
										<div
											key={order.id}
											className="grid grid-cols-[repeat(2,minmax(0,_1fr))_90px_90px] gap-4 p-4 border-b-[1px] border-solid border-gray-300 px-5 content-center"
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
											<Typography className="text-sm text-right">
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
					</div>
					<div className="col-span-1 flex flex-col gap-4">
						{/* order status & chart  */}
						<div className="w-full h-min flex flex-col content-center bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
							<div className="flex flex-col p-5 gap-2 border-b-[1px] border-solid border-gray-300">
								<Typography className="text-base font-semibold pb-2">
									Order Status
								</Typography>
								<div className="flex gap-2 items-center">
									<span className="w-3 h-3 rounded-full bg-green-300"></span>{' '}
									<Typography className="text-sm font-normal">
										{saleData.completedQuantity} orders
										completed
									</Typography>
								</div>
								<div className="flex gap-2 items-center">
									<span className="w-3 h-3 rounded-full bg-cyan-200"></span>{' '}
									<Typography className="text-sm font-normal">
										{saleData.pendingQuantity} pending
										orders
									</Typography>
								</div>
								<div className="flex gap-2 items-center">
									<span className="w-3 h-3 rounded-full bg-blue-200"></span>{' '}
									<Typography className="text-sm font-normal">
										{saleData.processingQuantity} processing
										orders
									</Typography>
								</div>
								<div className="flex gap-2 items-center">
									<span className="w-3 h-3 rounded-full bg-red-300"></span>{' '}
									<Typography className="text-sm font-normal">
										{saleData.cancelledQuantity} orders
										cancelled
									</Typography>
								</div>
							</div>
							<div className="w-full flex py-4 justify-center items-center">
								<Chart {...chartConfig} />
							</div>
						</div>
						{/* products  */}
						<div className="w-full h-min flex flex-col content-center bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
							<div className="flex flex-col p-5 gap-2 border-b-[1px] border-solid border-gray-300">
								<div className="flex justify-between ">
									<Typography className="pb-2 text-base font-semibold">
										Products
									</Typography>
									<Link to="/admin/products/laptops">
										<Typography className="hover:underline text-blue-600 text-sm font-medium">
											All products
										</Typography>
									</Link>
								</div>
								<div className="flex gap-4 items-center">
									<Typography className="text-sm font-medium">
										Number of products:{' '}
										<span className="text-admin font-semibold">
											{products}
										</span>
									</Typography>
								</div>
							</div>
						</div>
						{/* customers  */}
						<div className="w-full h-min flex flex-col content-center bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
							<div className="flex flex-col p-5 gap-2 border-b-[1px] border-solid border-gray-300">
								<div className="flex justify-between ">
									<Typography className="pb-2 text-base font-semibold">
										Customers
									</Typography>
									<Link to="/admin/customers">
										<Typography className="hover:underline text-blue-600 text-sm font-medium">
											All customers
										</Typography>
									</Link>
								</div>

								<div className="flex gap-4 items-center">
									<Typography className="text-sm font-medium">
										Number of customers:{' '}
										<span className="text-admin font-semibold">
											{customers}
										</span>
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default Dashboard;
