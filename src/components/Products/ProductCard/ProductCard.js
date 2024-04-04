import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import RatingBar from '../../RatingBar/RatingBar';
import AddToCartDialog from '../../AddToCartDialog/AddToCartDialog';
import OptionList from '../../OptionList/OptionList';
import { useState } from 'react';

export function ProductCard({ detail }) {
	const fakeId = '123';

	const [colorList, setColorList] = useState([
		{ title: 'Red', choose: true },
		{ title: 'Green', choose: false },
		{ title: 'Yellow', choose: false },
		{ title: 'Blue', choose: false },
	]);

	const [variantList, setVariantList] = useState([
		{ title: '8GB - 128GB', choose: true },
		{ title: '8GB - 256GB', choose: false },
		{ title: '8GB - 512GB', choose: false },
	]);

	const handleChooseColor = (value) => {
		setColorList((prev) => {
			return prev.map((option) => {
				if (option.title === value) {
					option.choose = true;
				} else {
					option.choose = false;
				}
				return option;
			});
		});
	};

	const handleChooseVariant = (value) => {
		setVariantList((prev) => {
			return prev.map((option) => {
				if (option.title === value) {
					option.choose = true;
				} else {
					option.choose = false;
				}
				return option;
			});
		});
	};

	return (
		<Card className="w-full bg-main shadow-md shadow-main">
			<Link
				to={fakeId}
				className="[&_p]:hover:text-highlight [&>*:first-child]:hover:scale-105 "
			>
				<CardHeader
					shadow={false}
					floated={false}
					className="h-48 mb-4 duration-500"
				>
					<img
						src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
						alt="card"
						className="h-full w-full object-cover "
					/>
				</CardHeader>
				<div className="px-4 flex items-baseline justify-between gap-2">
					<Typography
						variant="paragraph"
						className={`font-medium text-text hover:text-highlight ${
							detail ? 'text-2xl' : ''
						}`}
					>
						Apple AirPods Pro 2024
					</Typography>
					<div className="flex flex-row">
						<span className="w-4 h-4 rounded-full bg-red-400 border-solid border-white border-[1px] -ml-1" />
						<span className="w-4 h-4 rounded-full bg-red-500 border-solid border-white border-[1px] -ml-1" />
						<span className="w-4 h-4 rounded-full bg-red-600 border-solid border-white border-[1px] -ml-1" />
						<span className="w-4 h-4 rounded-full bg-red-700 border-solid border-white border-[1px] -ml-1" />
					</div>
				</div>
			</Link>
			<CardBody className="px-4 pt-2 pb-4">
				<Typography
					variant="small"
					className="font-normal opacity-75 text-text"
				>
					With plenty of talk and
				</Typography>
				<Typography className="font-medium text-highlight">
					1.999.000 VND
				</Typography>
				<RatingBar
					value={3}
					relatedStyle={'text-highlight text-sm w-4 h-4'}
					unrelatedStyle={'text-text text-sm w-4 h-4 '}
					wrapperStyle={'flex flex-row gap-1 hover:opacity-60 mt-1'}
				/>
			</CardBody>
			{!detail && (
				<CardFooter className="pt-0 px-4 flex flex-row gap-1 justify-between items-center">
					<Link to={fakeId}>
						<Button
							ripple={true}
							className="bg-highlight py-1 rounded-3xl border-text border-solid border-[1px] text-main shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
						>
							Buy now
						</Button>
					</Link>
					<div className="flex flex-row gap-1">
						<AddToCartDialog
							icon={
								<ShoppingCartIcon className="h-4 w-4 text-text" />
							}
							buttonStyle={
								'h-8 w-8 rounded-3xl bg-main border-text border-solid border-[1px] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100'
							}
						/>
						<IconButton
							ripple={true}
							className="h-8 w-8 rounded-3xl bg-main border-text border-solid border-[1px] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
						>
							<HeartIcon className="h-4 w-4 text-text" />
						</IconButton>
					</div>
				</CardFooter>
			)}

			{detail && (
				<>
					<OptionList
						wrapperStyle={'px-4 flex flex-row gap-1 mb-4'}
						data={variantList}
						handleChoose={handleChooseVariant}
					/>
					<OptionList
						wrapperStyle={'px-4 flex flex-row gap-1'}
						data={colorList}
						handleChoose={handleChooseColor}
					/>
				</>
			)}
		</Card>
	);
}
