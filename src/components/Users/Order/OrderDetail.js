import React from 'react';
import { Typography } from '@material-tailwind/react';
import {
	ArrowPathIcon,
	CheckCircleIcon,
	ExclamationTriangleIcon,
	MapPinIcon,
	CreditCardIcon,
	ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { FormatNumber } from '../../../utils';

const OrderDetail = () => {
	const data = {
		id: '01840SH24020736918',
		status: 'received',
		total: '5.265.000',
		orderAt: '09:55 Tuesday, 13/02/2024',
		receivedAt: '09:55 Thursday, 15/02/2024',
		address:
			'Supermarket Quarter 1, Binh Dai town, Binh Dai district, Ben Tre province (Next to Binh Dai hospital)',
		receiver: 'Kith',
		phone: '0829751569',
		payment: 'COD',
		products: [
			{
				img: 'https://cdn.tgdd.vn/Products/Images/42/316075/samsung-galaxy-a15-4g-den-thumb-200x200.jpg',
				name: 'Samsung Galaxy A15 A155F (8G+256G) Black',
				quantity: 1,
				discount: 20,
				price: 4990000,
				color: 'Red',
				variant: '8GB - 256GB',
			},
			{
				img: 'https://cdn.tgdd.vn/Products/Images/9499/318156/adapter-sac-type-c-pd-25w-samsung-ep-t2510n-den-1-180x125.jpg',
				name: 'Type C PD 25W Charger Adapter Samsung EP-T2510NB Black',
				quantity: 1,
				discount: 10,
				price: 275000,
				color: 'Red',
				variant: '8GB - 256GB',
			},
		],
	};

	return (
		<div className="w-full bg-transparent rounded-md px-5">
			<div className="w-full flex flex-col md:flex-row justify-between pb-3 gap-2">
				<div className="flex flex-col desktop:flex-row gap-1 items-baseline">
					<Typography className="text-text text-xl">
						Order ID{' '}
						<span className="text-text text-lg md:text-xl font-semibold">
							#{data.id}
							<span className="hidden desktop:inline">
								{' - '}
							</span>
						</span>
					</Typography>
					<Typography className="text-text text-base">
						Order at: {data.orderAt}
					</Typography>
				</div>
				{data.status === 'spending' ? (
					<Typography className="text-blue-400 text-base md:text-base font-semibold flex gap-1 items-center">
						<ArrowPathIcon className="w-6 h-6" />
						Spending
					</Typography>
				) : data.status === 'received' ? (
					<Typography className="text-highlight text-base md:text-base font-semibold flex gap-1 items-center">
						<CheckCircleIcon className="w-6 h-6" />
						Received
					</Typography>
				) : (
					<Typography className="text-red-700 text-base md:text-base font-semibold flex gap-1 items-center">
						<ExclamationTriangleIcon className="w-6 h-6" />
						Cancel
					</Typography>
				)}
			</div>
			<div className="w-full grid md:grid-cols-6 gap-4 md:gap-6">
				<div className="w-full md:col-span-4 bg-main rounded-md p-4 flex flex-col gap-2">
					<Typography className="text-text text-base font-semibold uppercase flex gap-2 items-center">
						<MapPinIcon className="w-6 h-6" />
						Receiving information
					</Typography>

					<Typography className="w-full text-base text-text grid grid-cols-6 desktop:grid-cols-5">
						<span className="col-span-2 desktop:col-span-1">
							Receiver:{' '}
						</span>
						<span className="col-span-4 desktop:col-span-4">
							{data.receiver}
						</span>
					</Typography>
					<Typography className="w-full text-base text-text grid grid-cols-6 desktop:grid-cols-5">
						<span className="col-span-2 desktop:col-span-1">
							Address:{' '}
						</span>
						<span className="col-span-4 desktop:col-span-4">
							{data.address}
						</span>
					</Typography>
					<Typography className="w-full text-base text-text grid grid-cols-6 desktop:grid-cols-5">
						<span className="col-span-2 desktop:col-span-1">
							Received at:
						</span>
						<span className="col-span-4 desktop:col-span-4">
							{data.receivedAt}
						</span>
					</Typography>
				</div>
				<div className="w-full md:col-span-2">
					<div className="w-full md:col-span-5 bg-main rounded-md p-4 flex flex-col gap-2 h-full">
						<Typography className="text-text text-base font-semibold uppercase flex gap-2 items-center">
							<CreditCardIcon className="w-6 h-6" />
							Payment method
						</Typography>
						{data.payment === 'COD' ? (
							<Typography className="w-full text-base text-text">
								Payment on delivery
							</Typography>
						) : (
							<Typography className="w-full text-base text-text">
								Online payment
							</Typography>
						)}
					</div>
				</div>
			</div>
			<div className="w-full bg-main rounded-md mt-4 md:mt-6 p-4">
				<Typography className="text-text text-base font-semibold uppercase flex gap-2 items-center mb-2">
					<ShoppingBagIcon className="w-6 h-6" />
					Products information
				</Typography>
				<div className="w-full flex gap-4 flex-col">
					{data.products.map((item) => (
						<div
							key={item.name}
							className="flex gap-4 border-solid border-b-[1px] border-gray-700 py-3 "
						>
							<img
								src={item.img}
								className="w-20 h-20 object-cover"
								alt="product"
							/>
							<div className="flex justify-between flex-1 gap-4">
								<Typography className="inline-block text-text text-base">
									<span className="block font-medium mb-2">
										{`${item.name} (${item.color}, ${item.variant})`}
									</span>
									<span className="block text-sm">
										Quantity: {item.quantity}
									</span>
								</Typography>
								<Typography className="inline-block text-text text-base text-right">
									<span className="block font-medium mb-1">
										{FormatNumber(
											(item.price *
												(100 - item.discount)) /
												100
										)}{' '}
										VND
									</span>
									<span className="block text-sm line-through ">
										{FormatNumber(item.price)} VND
									</span>
								</Typography>
							</div>
						</div>
					))}

					<Typography className="text-text text-base text-right mt-4 md:mt-0">
						Total:{' '}
						<span className="font-semibold text-base md:text-lg">
							{data.total + ' '}{' '}
							<span className="text-base">VND</span>
						</span>
					</Typography>
				</div>
			</div>
			<div className="w-full text-center md:text-right mt-4">
				<Link
					to="/user/order"
					className="bg-transparent inline-block md:py-2 px-4 border-solid rounded md:border-[1px] border-highlight text-highlight hover:bg-highlight hover:text-background delay-100 "
				>
					<Typography className="font-medium text-base normal-case">
						Back to order list
					</Typography>
				</Link>
			</div>
		</div>
	);
};

export default OrderDetail;
