import { IconButton, Switch, Typography } from '@material-tailwind/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon, PhotoIcon } from '@heroicons/react/24/outline';
import AdminLayout from '../../../../layouts/AdminLayout';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const VariantItem = ({ data }) => {
	const isEdit = data !== undefined;
	return (
		<div className="w-full bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
			<Typography className="p-4 text-base font-semibold">
				Variant
			</Typography>
			<form className="p-4 pt-0 grid grid-cols-2 gap-2">
				{/* image  */}
				<div className="flex flex-col gap-2 col-span-2">
					<Typography className="text-sm font-medium">
						Image
					</Typography>
					<div className="grid grid-cols-2 gap-4">
						{isEdit && (
							<img
								src={data.image}
								alt="variantImg"
								className="object-cover rounded-md"
							/>
						)}
						<FileUploader
							name="variantImage"
							types={fileTypes}
							children={
								<div className="w-full rounded-md border-dashed border-[3px] border-gray-300 flex flex-col justify-center items-center p-3 cursor-pointer">
									<div className="p-4 ">
										<PhotoIcon className="text-admin w-8 h-8" />
									</div>
								</div>
							}
						/>
					</div>
				</div>
				{/* price */}
				<div className="flex flex-col gap-2">
					<Typography className="text-sm font-medium">
						Price
					</Typography>
					<input
						type="text"
						placeholder="Price"
						value={data?.price}
						spellCheck="false"
						className="h-min font-sans transition-all text-sm font-medium leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
					></input>
				</div>
				{/* color */}
				<div className="flex flex-col gap-2">
					<Typography className="text-sm font-medium">
						Color
					</Typography>
					<input
						type="text"
						placeholder="Color"
						value={data?.color}
						spellCheck="false"
						className="h-min font-sans transition-all text-sm font-medium leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
					></input>
				</div>

				{/* Discount */}
				<div className="flex flex-col gap-2">
					<Typography className="text-sm font-medium">
						Discount
					</Typography>
					<input
						type="text"
						placeholder="Discount"
						value={data?.discount.value}
						spellCheck="false"
						className="h-min font-sans transition-all text-sm font-medium leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
					></input>
				</div>
				{/* End date */}
				<div className="flex flex-col gap-2">
					<Typography className="text-sm font-medium">
						End date
					</Typography>
					<input
						type="date"
						value={data?.discount.endDate}
						className="h-min font-sans transition-all text-sm font-medium leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
					></input>
				</div>
				{/* Quantity */}
				<div className="flex flex-col gap-2">
					<Typography className="text-sm font-medium">
						Quantity
					</Typography>
					<input
						type="number"
						min={0}
						placeholder="Quantity"
						value={data?.quantity}
						spellCheck="false"
						className="h-min font-sans transition-all text-sm font-medium leading-4 outline-none shadow-none bg-transparent py-2 px-3 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
					></input>
				</div>
				{/* active */}
				<div className="flex flex-col gap-2">
					<Typography className="text-sm font-medium">
						Active
					</Typography>
					<div className="ml-2">
						<Switch color="green" defaultChecked={data?.active} />
					</div>
				</div>

				<div className="text-right mt-2 col-span-2">
					<button
						type="submit"
						className="w-min py-2 px-4 text-sm text-white font-semibold bg-admin border-[1px] border-solid border-gray-300 rounded-md hover:bg-strongAdmin"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

const EditMouse = () => {
	const { productId } = useParams();
	const navigate = useNavigate();

	const generalData = {
		name: 'accent chair',
		brand: 'marcos',
		description:
			'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
	};

	const detailData = [
		{
			type: 'Compatible',
			value: 'Windows',
		},
		{ type: 'Resolution', value: '7000 DPI' },
		{
			type: 'Connect',
			value: 'USB plug',
		},
		{ type: 'Led light', value: 'RGB' },
		{ type: 'Weight', value: '84 gr' },
		{ type: 'Made in', value: 'China' },
		{ type: 'Brand of', value: 'Taiwan' },
	];

	const variantList = [
		{
			price: 28999000,
			image: 'https://www.course-api.com/images/store/product-1.jpeg',
			color: 'Red',
			active: true,
			quantity: 10,
			discount: { value: 10, endDate: '2024-04-24' },
		},
		{
			price: 25999000,
			image: 'https://www.course-api.com/images/store/product-1.jpeg',
			color: 'Red',
			active: false,
			quantity: 10,
			discount: { value: 10, endDate: '2024-05-20' },
		},
	];

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
						Editing <span className="text-admin">{productId}</span>
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
									value={generalData.name}
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
									value={generalData.brand}
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
									value={generalData.description}
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
					{/* Specifications  */}
					<div className="w-full bg-white rounded-md border-[1px] border-solid border-gray-300 shadow-sm shadow-gray-400">
						<Typography className="p-4 text-base font-semibold">
							Specifications
						</Typography>
						<form className="grid grid-cols-2">
							{detailData.map((item) => (
								<div className="px-4 py-2 pt-0" key={item.type}>
									<Typography className="text-sm font-medium">
										{item.type}
									</Typography>
									<input
										type="text"
										placeholder={item.type}
										defaultValue={item.value}
										required={true}
										spellCheck="false"
										className="h-min w-full font-sans transition-all text-sm font-medium leading-4 outline-none shadow-none bg-transparent py-1 px-2 text-main placeholder:text-gray-600 placeholder:font-normal border-[1px] border-solid border-gray-300 rounded-md focus:border-admin"
									></input>
								</div>
							))}

							<div className="mb-4 col-span-2 px-4 text-right mt-2">
								<button
									type="submit"
									className="w-min py-2 px-4 text-sm text-white font-semibold bg-admin border-[1px] border-solid border-gray-300 rounded-md hover:bg-strongAdmin"
								>
									Save
								</button>
							</div>
						</form>
					</div>
					{/* variants  */}
					<div className="grid grid-cols-2 gap-4">
						{variantList.map((variant) => (
							<VariantItem
								data={variant}
								key={variant.color + variant.price}
							/>
						))}
						{/* add variant  */}
						<VariantItem />
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default EditMouse;
