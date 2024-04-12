import { Typography } from '@material-tailwind/react';
import React from 'react';
import OrderItem from './OrderItem';
import OrderItemSkeleton from './OrderItemSkeleton';

const AllOrder = () => {
	const orders = [
		{
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
					discount: '10',
					price: '4.990.000',
					color: 'Red',
					variant: '8GB - 256GB',
				},
				{
					img: 'https://cdn.tgdd.vn/Products/Images/9499/318156/adapter-sac-type-c-pd-25w-samsung-ep-t2510n-den-1-180x125.jpg',
					name: 'Type C PD 25W Charger Adapter Samsung EP-T2510NB Black',
					quantity: 1,
					discount: '10',
					price: '275.000',
					color: 'Red',
					variant: '8GB - 256GB',
				},
			],
		},
		{
			id: '00047SH23020695187',
			status: 'spending',
			total: '12.765.000',
			orderAt: '09:55 Tuesday, 13/02/2024',
			receivedAt: '09:55 Thursday, 15/02/2024',
			address:
				'Supermarket Quarter 1, Binh Dai town, Binh Dai district, Ben Tre province (Next to Binh Dai hospital)',
			receiver: 'Kith',
			phone: '0829751569',
			payment: 'COD',
			products: [
				{
					img: 'https://cdn.tgdd.vn/Products/Images/42/234621/Xiaomi-12-tim-thumb-mau-600x600.jpg',
					name: 'Xiaomi 12 (8+256G) Tím',
					quantity: 1,
					discount: '10',
					price: '19.490.000',
					color: 'Red',
					variant: '8GB - 256GB',
				},
				{
					img: 'https://cdn.tgdd.vn/Products/Images/9499/318156/adapter-sac-type-c-pd-25w-samsung-ep-t2510n-den-1-180x125.jpg',
					name: 'Type C PD 25W Charger Adapter Samsung EP-T2510NB Black',
					quantity: 1,
					discount: '10',
					price: '275.000',
					color: 'Red',
					variant: '8GB - 256GB',
				},
			],
		},
		{
			id: '00047SH23020695367',
			status: 'cancel',
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
					img: 'https://cdn.tgdd.vn/Products/Images/58/245494/cap-type-c-20cm-ava-ds06cb-tb-trang-2-180x125.jpg',
					name: 'Cáp Type C 20cm AVA+ DS06CW-TB Trắng',
					quantity: 1,
					discount: '10',
					price: '4.990.000',
					color: 'Red',
					variant: '8GB - 256GB',
				},
			],
		},
	];
	return (
		<div className="w-full">
			<div className="text-text pb-2">
				<Typography className="text-2xl md:text-3xl font-semibold md:text-right">
					All orders
				</Typography>
			</div>
			<div className="w-full flex flex-col gap-4">
				{orders.map((item) => (
					<OrderItem key={item.id} data={item} />
				))}
				<OrderItemSkeleton />
			</div>
		</div>
	);
};

export default AllOrder;
