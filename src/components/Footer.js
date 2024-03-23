import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Products/ProductsSlice';

function Footer() {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchProducts());
	// }, [dispatch]);

	// const product = useSelector((state) => state.products);

	// console.log(product);

	return <h1>Footer</h1>;
}

export default Footer;
