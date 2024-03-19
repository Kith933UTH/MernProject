import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import usersSlice from '../components/Users/UsersSlice';
import productsSlice from '../components/Products/ProductsSlice';

const store = configureStore({
	reducer: {
		users: usersSlice.reducer,
		products: productsSlice.reducer,
	},
	middleware: () => [thunk], // sử dụng thunk middleware để sử lý bất đồng bộ
});

export default store;
