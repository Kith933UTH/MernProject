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

export function ProductCard() {
	return (
		<Card className="w-full bg-main shadow-md shadow-main">
			<Link to={'133'}>
				<CardHeader shadow={false} floated={false} className="h-48">
					<img
						src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
						alt="card"
						className="h-full w-full object-cover"
					/>
				</CardHeader>
			</Link>
			<CardBody>
				<div className="mb-2 flex items-center justify-between gap-2">
					<Typography className="font-medium text-text">
						Apple AirPods Pro 2024
					</Typography>
					<div className="flex flex-row">
						<span className="w-4 h-4 rounded-full bg-red-400 border-solid border-white border-[1px] -ml-1" />
						<span className="w-4 h-4 rounded-full bg-red-500 border-solid border-white border-[1px] -ml-1" />
						<span className="w-4 h-4 rounded-full bg-red-600 border-solid border-white border-[1px] -ml-1" />
						<span className="w-4 h-4 rounded-full bg-red-700 border-solid border-white border-[1px] -ml-1" />
					</div>
				</div>
				<Typography
					variant="small"
					className="font-normal opacity-75 text-text"
				>
					With plenty of talk and
				</Typography>
				<Typography className="font-medium text-highlight">
					1.999.000 VND
				</Typography>
			</CardBody>
			<CardFooter className="pt-0 flex flex-row gap-1 justify-between items-center">
				<Button
					ripple={true}
					className="bg-highlight py-1 rounded-3xl border-text border-solid border-[1px] text-main shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
				>
					Buy now
				</Button>
				<div className="flex flex-row gap-1">
					<IconButton
						ripple={true}
						className="h-8 w-8 rounded-3xl bg-main border-text border-solid border-[1px] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
					>
						<ShoppingCartIcon className="h-4 w-4 text-text" />
					</IconButton>
					<IconButton
						ripple={true}
						className="h-8 w-8 rounded-3xl bg-main border-text border-solid border-[1px] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
					>
						<HeartIcon className="h-4 w-4 text-text" />
					</IconButton>
				</div>
			</CardFooter>
		</Card>
	);
}
