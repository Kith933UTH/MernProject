import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	TrashIcon,
	XMarkIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { BsCartX } from 'react-icons/bs';
import {
	Badge,
	Button,
	Drawer,
	IconButton,
	List,
	Tooltip,
	Typography,
} from '@material-tailwind/react';

import CartItem from './CartItem';
import { CartItemSkeleton } from './CartItemSkeleton';
import { Link } from 'react-router-dom';
import { FormatNumber } from '../../utils';
import cartSlice from './CartSlice';

const Cart = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(fetchProducts());
	}, [dispatch]);

	const cartList = useSelector((state) => state.cart);
	const total = useMemo(() => {
		return cartList.data.reduce((total, cur) => {
			return (
				total +
				((cur.price * (100 - cur.discount)) / 100) * cur.quantity
			);
		}, 0);
	}, [cartList]);

	//Cart handler
	const [openCart, setOpenCart] = useState(false);
	const openCartSection = () => {
		setOpenCart(true);
	};
	const closeCartSection = () => setOpenCart(false);
	return (
		<>
			<Badge
				content={cartList.data.length}
				className="min-w-5 min-h-5 hover:opacity-80"
			>
				<Tooltip
					content="Shopping cart"
					placement="bottom"
					className="bg-main"
				>
					<IconButton
						variant="text"
						color="white"
						onClick={openCartSection}
					>
						<ShoppingCartIcon className="h-6 w-6" />
					</IconButton>
				</Tooltip>
			</Badge>
			<Drawer
				placement="right"
				open={openCart}
				onClose={closeCartSection}
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
						{`SHOPPING CART (${cartList.data.length})`}
					</Typography>

					{/* close button  */}
					<IconButton variant="text" onClick={closeCartSection}>
						<XMarkIcon className="w-6 h-6 text-main" />
					</IconButton>
				</div>

				{/* Cart list  */}
				{cartList.data.length > 0 ? (
					<List className="flex-1 overflow-y-scroll scroll-smooth">
						{cartList.isLoading ? (
							<>
								<CartItemSkeleton />
								<CartItemSkeleton />
								<CartItemSkeleton />
								<CartItemSkeleton />
								<CartItemSkeleton />
							</>
						) : (
							cartList.data.map((item) => (
								<CartItem key={item.id} data={item} />
							))
						)}
					</List>
				) : (
					<div className="flex flex-col items-center gap-4">
						<BsCartX className="w-24 h-24 text-main" />
						<Typography className="text-lg uppercase font-semibold text-main">
							Your cart is empty
						</Typography>
					</div>
				)}

				{/* Cart footer */}
				<div>
					<div className="flex flex-row justify-between items-center py-4 border-t-[1px] border-blue-gray-400 border-solid">
						<Typography
							variant="paragraph"
							className="text-main text-lg font-semibold"
						>
							Subtotal: {FormatNumber(total)} VND
						</Typography>
						<IconButton
							color="red"
							onClick={() =>
								dispatch(cartSlice.actions.removeEntireCart())
							}
						>
							<TrashIcon className="w-6 h6"></TrashIcon>
						</IconButton>
					</div>
					<Link
						to="/checkout"
						onClick={closeCartSection}
						className={
							cartList.data.length <= 0
								? 'pointer-events-none'
								: ''
						}
					>
						{cartList.data.length <= 0 ? (
							<Button fullWidth className="text-sm" disabled>
								Check out
							</Button>
						) : (
							<Button fullWidth className="text-sm">
								Check out
							</Button>
						)}
					</Link>
				</div>
			</Drawer>
		</>
	);
};

export default Cart;
