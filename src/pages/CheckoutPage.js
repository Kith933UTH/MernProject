import React from 'react';
import Infor from '../components/Checkout/ShipingInfor/Infor';
import Address from '../components/Checkout/ShipingInfor/Address';
import Order from '../components/Checkout/Order/Order';
import Payment from '../components/Checkout/ShipingInfor/Payment';

const CheckoutPage = () => {
	const user = {
		name: 'Kith',
		phone: '0829751569',
		mail: 'kith@ut.edu.vn',
		gender: 'male',
		address: [
			{
				provinceId: '83',
				districtId: '835',
				communeId: '29086',
				street: 'Bến xe Bình Đại',
				defaultAddress: true,
			},
			{
				provinceId: '83',
				districtId: '835',
				communeId: '29086',
				street: 'Bến xe ',
				defaultAddress: false,
			},
		],
	};
	return (
		<div className="w-full my-6 grid grid-cols-1 gap-8 md:grid-cols-8">
			<div className="w-full md:col-span-3 flex flex-col gap-4">
				<Infor data={user} />
				<Address data={user.address} />
				<Payment />
			</div>
			<div className="w-full md:col-span-5">
				<Order />
			</div>
		</div>
	);
};

export default CheckoutPage;
