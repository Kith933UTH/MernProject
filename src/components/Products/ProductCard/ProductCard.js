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
import { FormatNumber } from '../../../utils';

export function ProductCard(props) {
	const currentPrice = (props.data.price * (100 - props.data.discount)) / 100;
	return (
		<Card className="w-full bg-main shadow-md shadow-main">
			<Link
				to={props.data.id}
				className="[&_p]:hover:text-highlight [&>*:first-child]:hover:scale-105 "
			>
				<CardHeader
					shadow={false}
					floated={false}
					className="h-48 mb-4 duration-500"
				>
					<img
						src={props.data.image}
						alt="card"
						className="h-full w-full object-cover "
					/>
				</CardHeader>
				<div className="px-4 flex items-baseline justify-between gap-2">
					<Typography
						variant="paragraph"
						className={`font-medium text-text text-lg hover:text-highlight ${
							props.detail ? 'text-2xl' : ''
						}`}
					>
						{props.data.name}
					</Typography>
					<div className="flex flex-row">
						<span className="w-4 h-4 rounded-full bg-red-400 border-solid border-white border-[1px] -ml-1" />
						<span className="w-4 h-4 rounded-full bg-red-500 border-solid border-white border-[1px] -ml-1" />
						<span className="w-4 h-4 rounded-full bg-red-600 border-solid border-white border-[1px] -ml-1" />
						<span className="w-4 h-4 rounded-full bg-red-700 border-solid border-white border-[1px] -ml-1" />
					</div>
				</div>
			</Link>
			<CardBody className="px-4 pt-2 pb-4 flex flex-col flex-1 justify-between">
				<Typography
					variant="paragraph"
					className="font-normal mt-auto text-sm mb-2 opacity-75 text-text !line-clamp-2"
				>
					{props.data.description}
				</Typography>
				<div>
					<Typography className="font-medium text-highlight">
						{FormatNumber(currentPrice)} VND
					</Typography>
					<Typography className="text-text">
						<span className="line-through">
							{FormatNumber(props.data.price)} VND
						</span>{' '}
						<span className="text-sm">-{props.data.discount}%</span>
					</Typography>
					<RatingBar
						value={props.data.rate}
						relatedStyle={'text-highlight text-sm w-4 h-4'}
						unrelatedStyle={'text-text text-sm w-4 h-4 '}
						wrapperStyle={
							'flex flex-row gap-1 hover:opacity-60 mt-1'
						}
					/>
				</div>
			</CardBody>
			{!props.detail && (
				<CardFooter className="pt-0 px-4 flex flex-row gap-1 justify-between items-center">
					<Link to={props.data.id}>
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
							data={props.data}
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

			{props.detail && props.children}
		</Card>
	);
}
