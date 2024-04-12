import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	ButtonGroup,
	IconButton,
	Typography,
} from '@material-tailwind/react';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FormatNumber } from '../../../utils';
import cartSlice from '../../Cart/CartSlice';
import { Link } from 'react-router-dom';

const Order = () => {
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

	return (
		<>
			<div className="w-full bg-main rounded-md p-4">
				{cartList.data.length > 0 ? (
					<>
						<Typography className="text-text text-base font-semibold uppercase mb-3">
							Your order
						</Typography>
						<div className="">
							{cartList.data.map((cartItem) => {
								return (
									<div key={cartItem.id}>
										<div className="p-0 gap-4 flex mb-4">
											{/* Cart item image  */}
											<img
												className="h-20 w-20 md:h-28 md:w-28 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
												src={cartItem.image}
												alt={cartItem.name}
											/>

											{/* Cart item body  */}
											<div className="flex-1">
												<div className="flex flex-row justify-between gap-2">
													<div>
														<Typography
															variant="paragraph"
															className="uppercase font-medium text-base text-text mb-2 cursor-default hover:underline"
														>
															{cartItem.name}
														</Typography>
														<Typography
															variant="paragraph"
															className="uppercase text-xs font-medium text-text mb-3 cursor-default flex gap-2"
														>
															<span className="border-solid border-[1px] border-text p-1 rounded">
																{cartItem.color}
															</span>
															<span className="border-solid border-[1px] border-text p-1 rounded">
																{
																	cartItem.variant
																}
															</span>
														</Typography>
													</div>
													{/* Cart item remove button  */}
													<IconButton
														variant="text"
														className="py-0 px-4 w-5 h-5 hover:bg-transparent hover:opacity-80"
														onClick={() =>
															dispatch(
																cartSlice.actions.removeFromCart(
																	cartItem.id
																)
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
														className="text-text items-center"
													>
														<IconButton
															variant="text"
															className="hover:bg-black/10"
															onClick={() =>
																dispatch(
																	cartSlice.actions.decreaseQuantity(
																		cartItem.id
																	)
																)
															}
														>
															<MinusIcon className="w-4 h-4 text-text" />
														</IconButton>

														<IconButton className="font-md text-text text-base pointer-events-none">
															{cartItem.quantity}
														</IconButton>

														<IconButton
															variant="text"
															className="hover:bg-black/10"
															onClick={() =>
																dispatch(
																	cartSlice.actions.increaseQuantity(
																		cartItem.id
																	)
																)
															}
														>
															<PlusIcon className="w-4 h-4 text-text" />
														</IconButton>
													</ButtonGroup>
													<Typography
														variant="paragraph"
														className="text-text text-base opacity-80 mr-4"
													>
														{FormatNumber(
															(cartItem.price *
																(100 -
																	cartItem.discount)) /
																100
														)}
													</Typography>
													<Typography
														variant="paragraph"
														className="text-text text-base font-semibold"
													>
														{FormatNumber(
															((cartItem.price *
																(100 -
																	cartItem.discount)) /
																100) *
																cartItem.quantity
														)}{' '}
														<span className="hidden md:inline">
															VND
														</span>
													</Typography>
												</div>
											</div>
										</div>
										<hr className="my-3" />
									</div>
								);
							})}
						</div>
						<Typography
							variant="paragraph"
							className="text-text text-lg font-semibold flex justify-between"
						>
							<span>Total: </span>
							<span className="text-highlight">
								{FormatNumber(total)} VND
							</span>
						</Typography>
					</>
				) : (
					<>
						<Typography className="text-text text-xl font-semibold text-center">
							There are no products in your order.
						</Typography>
					</>
				)}
			</div>
			{cartList.data.length > 0 ? (
				<Button
					fullWidth
					className="text-sm text-main mt-4 bg-highlight"
				>
					Place order
				</Button>
			) : (
				<Link to="/">
					<Button
						fullWidth
						className="text-sm text-main mt-4 bg-highlight"
					>
						Back to Home
					</Button>
				</Link>
			)}
		</>
	);
};

export default Order;
