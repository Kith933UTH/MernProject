import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../api';

const productsSlice = createSlice({
	name: 'products',
	initialState: { isLoading: false, isError: false, data: [] },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.data = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchProducts.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
	},
});

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const data = await getData('react-tours-project');
		return data;
	}
);

export default productsSlice;
