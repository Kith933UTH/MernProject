import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import { ScrollToTop } from '../../../utils';
import { Pagination } from '../Pagination';
import AdminWideLayout from '../../../layouts/AdminWideLayout';

const perPage = 10;

const CustomerList = () => {
	const customerList = [
		{
			id: '01840SH24020736918',
			status: 'enabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH23020695187',
			status: 'disabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH23020695156',
			status: 'disabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH230206951sg',
			status: 'enabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH230206951ga',
			status: 'enabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH230206951ew',
			status: 'enabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH230206951kg',
			status: 'enabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH230206951et',
			status: 'enabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH230206951kj',
			status: 'enabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH23020695eya',
			status: 'enabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
		{
			id: '00047SH23020695rey',
			status: 'enabled',
			name: 'Kith',
			phone: '0829751569',
			email: 'nguyenkiet51569@gmail.com',
			createAt: 'Apr 17, 2024',
		},
	];

	const [active, setActive] = useState(1);
	const lengthOfPage = Math.ceil(customerList.length / perPage);

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

	const handleSubmitSearchByCustomerName = (e) => {
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
						Customers
					</Typography>
				</div>
				<div className="w-full bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
					<div className="grid grid-cols-[50px_repeat(2,minmax(0,_1fr))_100px_100px] gap-4 p-4 border-b-[1px] border-solid border-gray-300 px-8">
						<Typography className="text-sm font-bold">#</Typography>
						<div className="flex flex-col gap-2">
							<Typography className="text-sm font-bold">
								Full Name
							</Typography>
							<input
								type="text"
								placeholder="Full name"
								spellCheck="false"
								className="h-min w-[70%] font-sans transition-all text-sm font-bold leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
								onKeyDown={(e) =>
									e.keyCode === 13 &&
									handleSubmitSearchByCustomerName(e)
								}
							></input>
						</div>
						<div className="flex flex-col gap-2">
							<Typography className="text-sm font-bold">
								Email
							</Typography>
							<input
								type="text"
								placeholder="Email"
								spellCheck="false"
								className="h-min w-[70%] font-sans transition-all text-sm font-bold leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
								onKeyDown={(e) =>
									e.keyCode === 13 &&
									handleSubmitSearchByCustomerEmail(e)
								}
							></input>
						</div>
						<Typography className="text-sm font-bold">
							Status
						</Typography>
						<Typography className="text-sm font-bold">
							Create At
						</Typography>
					</div>
					{customerList.length > 0 ? (
						<>
							{customerList
								.map((customer, index) =>
									index < active * perPage &&
									index >= (active - 1) * perPage ? (
										<div
											key={customer.id}
											className="grid grid-cols-[50px_repeat(2,minmax(0,_1fr))_100px_100px] gap-4 p-4 border-b-[1px] border-solid border-gray-300 px-8 content-center"
										>
											<Typography className="text-sm font-semibold">
												{index + 1}
											</Typography>
											<Link
												to={
													'/admin/customers/' +
													customer.id.toString()
												}
											>
												<Typography className="text-sm font-semibold hover:underline ">
													{customer.name}
												</Typography>
											</Link>
											<Typography className="text-sm font-normal">
												{customer.email}
											</Typography>
											<div className="pl-4">
												{customer.status ===
												'enabled' ? (
													<span className="w-3 h-3 inline-block rounded-full bg-admin"></span>
												) : (
													<span className="w-3 h-3 inline-block rounded-full bg-gray-300"></span>
												)}
											</div>
											<Typography className="text-sm font-normal">
												{customer.createAt}
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
							No customers yet.
						</Typography>
					)}
				</div>
			</div>
		</AdminWideLayout>
	);
};

export default CustomerList;
