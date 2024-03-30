import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {
	Button,
	Drawer,
	IconButton,
	List,
	Typography,
} from '@material-tailwind/react';
import React from 'react';
import CartItem from './CartItem';
import { CartItemSkeleton } from './CartItemSkeleton';

const Cart = ({ open, closeDrawerRight }) => {
	return (
		<Drawer
			placement="right"
			open={open}
			onClose={closeDrawerRight}
			className="p-4 flex flex-col justify-between font-body"
			size={window.innerWidth > 500 ? 500 : window.innerWidth}
			dismiss={{
				enabled: true,
				escapeKey: true,
			}}
		>
			{/* Header  */}
			<div className="flex items-center p-2 mb-4 justify-between border-b-[1px] border-blue-gray-400 border-solid">
				{/* title */}
				<Typography
					variant="paragraph"
					className="font-semibold text-sm text-main"
				>
					{'SHOPPING CART (5)'}
				</Typography>

				{/* close button  */}
				<IconButton variant="text" onClick={closeDrawerRight}>
					<XMarkIcon className="w-6 h-6 text-main" />
				</IconButton>
			</div>

			{/* Cart list  */}
			<List className="flex-1 overflow-y-scroll scroll-smooth">
				<CartItem />
				<CartItemSkeleton />
				<CartItem />
				<CartItemSkeleton />
				<CartItem />
				<CartItemSkeleton />
			</List>

			{/* Cart footer */}
			<div>
				<div className="flex flex-row justify-between items-center py-4 border-t-[1px] border-blue-gray-400 border-solid">
					<Typography
						variant="paragraph"
						className="text-main text-lg font-semibold"
					>
						Subtotal: 1.253.252 VND
					</Typography>
					<IconButton color="red" className="">
						<TrashIcon className="w-6 h6"></TrashIcon>
					</IconButton>
				</div>
				<Button fullWidth className="text-sm">
					Check out
				</Button>
			</div>
		</Drawer>
	);
};

export default React.memo(Cart);
