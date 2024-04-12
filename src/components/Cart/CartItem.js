import React from 'react';
import { useDispatch } from 'react-redux';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
	ButtonGroup,
	IconButton,
	ListItem,
	ListItemPrefix,
	Typography,
} from '@material-tailwind/react';
import { FormatNumber } from '../../utils';
import cartSlice from '../Cart/CartSlice';

const CartItem = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<>
			<ListItem
				className="p-0 active:bg-transparent focus:bg-transparent hover:bg-transparent mb-4"
				selected={false}
				ripple={false}
			>
				{/* Cart item image  */}
				<ListItemPrefix>
					<img
						className="h-20 w-20 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
						src={data.image}
						alt={data.name}
					/>
				</ListItemPrefix>

				{/* Cart item body  */}
				<div className="flex-1">
					<div className="flex flex-row justify-between gap-2">
						<div>
							<Typography
								variant="paragraph"
								className="uppercase font-medium text-sm text-main mb-3 cursor-default hover:underline"
							>
								{data.name}
							</Typography>
							<Typography
								variant="paragraph"
								className="uppercase text-xs font-semibold text-main mb-3 cursor-default flex gap-2"
							>
								<span className="border-solid border-[1px] border-main p-1 rounded">
									{data.color}
								</span>
								<span className="border-solid border-[1px] border-main p-1 rounded">
									{data.variant}
								</span>
							</Typography>
						</div>
						{/* Cart item remove button  */}
						<IconButton
							variant="text"
							className="py-0 px-4 w-5 h-5 hover:bg-transparent hover:opacity-80"
							onClick={() =>
								dispatch(
									cartSlice.actions.removeFromCart(data.id)
								)
							}
						>
							<TrashIcon className="w-5 h-5 text-red-800" />
						</IconButton>
					</div>

					<div className="flex flex-row justify-between items-center gap-2  cursor-default">
						<ButtonGroup
							variant="text"
							size="sm"
							className="text-main items-center"
						>
							<IconButton
								variant="text"
								className="hover:bg-black/10"
								onClick={() =>
									dispatch(
										cartSlice.actions.decreaseQuantity(
											data.id
										)
									)
								}
							>
								<MinusIcon className="w-4 h-4 text-main" />
							</IconButton>

							<IconButton className="font-md text-main text-base pointer-events-none">
								{data.quantity}
							</IconButton>

							<IconButton
								variant="text"
								className="hover:bg-black/10"
								onClick={() =>
									dispatch(
										cartSlice.actions.increaseQuantity(
											data.id
										)
									)
								}
							>
								<PlusIcon className="w-4 h-4 text-main" />
							</IconButton>
						</ButtonGroup>
						<Typography
							variant="paragraph"
							className="text-main text-sm opacity-80 mr-4"
						>
							{FormatNumber(
								(data.price * (100 - data.discount)) / 100
							)}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-main text-sm font-semibold"
						>
							{FormatNumber(
								((data.price * (100 - data.discount)) / 100) *
									data.quantity
							)}{' '}
							<span className="hidden md:inline">VND</span>
						</Typography>
					</div>
				</div>
			</ListItem>
			<hr className="my-3" />
		</>
	);
};

export default CartItem;
