import { IconButton, Typography } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import AdminLayout from '../../../layouts/AdminLayout';

const NewProduct = ({ title }) => {
	const navigate = useNavigate();

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
						Create A{' '}
						<span className="text-admin">New {title} (+)</span>
					</Typography>
				</div>
				<div className="w-full flex flex-col gap-4">
					{/* General  */}
					<div className="w-full bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
						<Typography className="p-4 text-base font-semibold">
							General
						</Typography>
						<form className="p-4 pt-0 grid grid-cols-5 gap-2">
							<div className="col-span-3 flex flex-col gap-2">
								<Typography className="text-sm font-medium">
									Name
								</Typography>
								<input
									type="text"
									placeholder="Name"
									spellCheck="false"
									className="h-min font-sans transition-all text-sm font-medium leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
								></input>
							</div>
							<div className="col-span-2 flex flex-col gap-2">
								<Typography className="text-sm font-medium">
									Brand
								</Typography>
								<input
									type="text"
									placeholder="Brand"
									spellCheck="false"
									className="h-min font-sans transition-all text-sm font-medium leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
								></input>
							</div>
							<div className="col-span-5 flex flex-col gap-2">
								<Typography className="text-sm font-medium">
									Description
								</Typography>
								<textarea
									type="text"
									placeholder="Description"
									spellCheck="false"
									rows={5}
									className="h-min font-sans transition-all text-sm font-medium leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
								></textarea>
							</div>
							<div className="text-right mt-2 col-span-5">
								<button
									type="submit"
									className="w-min py-2 px-4 text-sm text-white font-semibold bg-admin border-[1px] border-solid border-gray-300 rounded-md hover:bg-strongAdmin"
								>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default NewProduct;
