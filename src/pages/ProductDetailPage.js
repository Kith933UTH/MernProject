import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
	let { productId } = useParams();
	return <h1>{productId}</h1>;
};

export default ProductDetailPage;
