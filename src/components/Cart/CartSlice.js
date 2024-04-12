import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../api';

const cartSlice = createSlice({
	name: 'cart',
	initialState: { isLoading: false, isError: false, data: [] },
	reducers: {
		addToCart: (state, action) => {
			let exist = false;
			state.data = state.data.map((item) => {
				if (item.id === action.payload.id) {
					exist = true;
					return {
						...item,
						quantity:
							item.quantity === 5
								? item.quantity
								: item.quantity + 1,
					};
				} else {
					return item;
				}
			});
			if (!exist) state.data.push({ ...action.payload, quantity: 1 });
		},
		increaseQuantity: (state, action) => {
			state.data = state.data.map((item) => {
				if (item.id === action.payload) {
					return {
						...item,
						quantity:
							item.quantity === 5
								? item.quantity
								: item.quantity + 1,
					};
				} else {
					return item;
				}
			});
		},
		decreaseQuantity: (state, action) => {
			state.data = state.data.map((item) => {
				if (item.id === action.payload) {
					return {
						...item,
						quantity:
							item.quantity === 1
								? item.quantity
								: item.quantity - 1,
					};
				} else {
					return item;
				}
			});
		},
		removeFromCart: (state, action) => {
			state.data = state.data.filter((item) => {
				return item.id !== action.payload;
			});
		},
		removeEntireCart: (state) => {
			state.data = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCart.fulfilled, (state, action) => {
				state.data = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchCart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCart.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
	},
});

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
	const data = await getData('react-store-products');
	return data;
});

export default cartSlice;
