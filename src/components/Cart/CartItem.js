import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
	ButtonGroup,
	IconButton,
	ListItem,
	ListItemPrefix,
	Typography,
} from '@material-tailwind/react';
import React from 'react';

const CartItem = () => {
	return (
		<>
			<ListItem
				className="p-0 active:bg-transparent focus:bg-transparent hover:bg-transparent  mb-4"
				selected={false}
				ripple={false}
			>
				{/* Cart item image  */}
				<ListItemPrefix>
					<img
						className="h-20 w-20 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
						src={
							'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
						}
						alt="nature"
					/>
				</ListItemPrefix>

				{/* Cart item body  */}
				<div>
					<div className="flex flex-row justify-start gap-2">
						<Typography
							variant="paragraph"
							className="uppercase font-medium text-sm text-main mb-3 cursor-default hover:underline"
						>
							MENS CASUAL PREMIUM SLIM FIT T-SHIRTS
						</Typography>
						{/* Cart item remove button  */}
						<IconButton
							variant="text"
							className="py-0 px-4 w-5 h-5 hover:bg-transparent hover:opacity-80"
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
							>
								<MinusIcon className="w-4 h-4 text-main" />
							</IconButton>

							<IconButton className="font-md text-main text-base pointer-events-none">
								{9}
							</IconButton>

							<IconButton
								variant="text"
								className="hover:bg-black/10"
							>
								<PlusIcon className="w-4 h-4 text-main" />
							</IconButton>
						</ButtonGroup>
						<Typography
							variant="paragraph"
							className="text-main text-sm opacity-80 mr-4"
						>
							149.000
						</Typography>
						<Typography
							variant="paragraph"
							className="text-main text-sm font-semibold"
						>
							999.000 VND
						</Typography>
					</div>
				</div>
			</ListItem>
			<hr className="my-3" />
		</>
	);
};

export default CartItem;
