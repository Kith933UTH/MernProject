import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../../layouts/AdminLayout';
import { IconButton, Typography } from '@material-tailwind/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const OrderDetail = () => {
	const fakeCate = 'laptops';
	const { orderId } = useParams();
	const navigate = useNavigate();
	const orderData = {
		id: '01840SH24020736918',
		status: 'completed',
		total: '5.265.000',
		orderAt: '09:55 Tuesday, 13/02/2024',
		receivedAt: '09:55 Thursday, 15/02/2024',
		address:
			'Supermarket Quarter 1, Binh Dai town, Binh Dai district, Ben Tre province (Next to Binh Dai hospital)',
		name: 'Kith',
		idCustomer: '6w4754dseyru',
		email: 'nguyenkiet51569gmail.com',
		phone: '0829751569',
		payment: 'COD',
		products: [
			{
				id: 'aghfjet1523646',
				img: 'https://cdn.tgdd.vn/Products/Images/42/316075/samsung-galaxy-a15-4g-den-thumb-200x200.jpg',
				name: 'Samsung Galaxy A15 A155F (8G+256G) Black',
				quantity: 1,
				discount: 20,
				price: 4990000,
				color: 'Red',
				variant: '8GB - 256GB',
			},
			{
				id: 'aghfjet1523625',
				img: 'https://cdn.tgdd.vn/Products/Images/9499/318156/adapter-sac-type-c-pd-25w-samsung-ep-t2510n-den-1-180x125.jpg',
				name: 'Type C PD 25W Charger Adapter Samsung EP-T2510NB Black',
				quantity: 2,
				discount: 10,
				price: 275000,
				color: 'Red',
				variant: '8GB - 256GB',
			},
		],
	};
	return (
		<AdminLayout>
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
						Order <span className="text-admin">#{orderId}</span>
					</Typography>

					{orderData.status === 'completed' ? (
						<Typography className="text-xs rounded-full bg-green-600 text-white w-min px-2 py-1">
							Completed
						</Typography>
					) : orderData.status === 'pending' ? (
						<Typography className="text-xs rounded-full bg-gray-400 text-white w-min px-2 py-1">
							Pending
						</Typography>
					) : orderData.status === 'processing' ? (
						<Typography className="text-xs rounded-full bg-gray-400 text-white w-min px-2 py-1">
							Processing
						</Typography>
					) : (
						<Typography className="text-xs rounded-full bg-red-600 text-white w-min px-2 py-1">
							Cancelled
						</Typography>
					)}
				</div>
				<div className="w-full grid grid-cols-5 gap-4">
					{/* Order  */}
					<div className="w-full h-min col-span-3 bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
						<Typography className="p-4 text-base font-semibold">
							Order
						</Typography>
						{orderData.products.map((product) => (
							<div
								className="flex gap-4 p-4 items-center"
								key={product.id}
							>
								<img
									src={product.img}
									alt="product"
									className="w-20 h-20 object-cover"
								/>
								<div className="flex flex-col gap-2 flex-1">
									<Link
										to={
											'/admin/products/' +
											fakeCate +
											'/' +
											product.id
										}
									>
										<Typography className="text-sm font-semibold">
											{product.name}
										</Typography>
									</Link>
									<Typography className="text-sm font-medium">
										{product.price} x {product.quantity}
									</Typography>
								</div>
								<Typography className="text-sm font-medium w-20 text-right">
									{product.price * product.quantity}
								</Typography>
							</div>
						))}
						<Typography className="p-4 text-base font-semibold text-right border-t-[1px] border-solid border-gray-300">
							Total:{' '}
							<span className="text-admin">
								{orderData.total}
							</span>
						</Typography>
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
									{orderData.name}
								</Typography>
							</div>
							<div className="grid grid-cols-[70px_1fr] gap-4">
								<Typography className="text-sm font-medium">
									Email:
								</Typography>
								<Link
									to={
										'/admin/customers/' +
										orderData.idCustomer
									}
								>
									<Typography className="text-sm text-blue-700 font-medium">
										{orderData.email}
									</Typography>
								</Link>
							</div>
							<div className="grid grid-cols-[70px_1fr] gap-4">
								<Typography className="text-sm font-medium">
									Phone:
								</Typography>
								<Typography className="text-sm font-medium">
									{orderData.phone}
								</Typography>
							</div>
							<div className="grid grid-cols-[70px_1fr] gap-4">
								<Typography className="text-sm font-medium">
									Address:
								</Typography>
								<Typography className="text-sm font-medium">
									{orderData.address}
								</Typography>
							</div>
						</div>

						<Typography className="p-4 text-base font-semibold border-t-[1px] border-solid border-gray-300">
							Payment
						</Typography>
						<div className="flex flex-col gap-4 p-4 pt-0 ">
							<div className="grid grid-cols-[70px_1fr] gap-4">
								<Typography className="text-sm font-medium">
									Method:
								</Typography>
								<Typography className="text-sm font-medium">
									{orderData.payment}
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default OrderDetail;
