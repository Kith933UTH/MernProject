import React from 'react';
import Information from './Information';
import Address from './Address';

const Profile = () => {
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
		<div className="w-full flex flex-col gap-6">
			<Information data={user} />
			<Address data={user.address} />
		</div>
	);
};

export default Profile;
