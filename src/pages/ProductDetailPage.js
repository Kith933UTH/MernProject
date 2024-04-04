import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/Products/ProductDetail';

const ProductDetailPage = ({ cateName }) => {
	let { productId } = useParams();
	return <ProductDetail data={productId} cateName={cateName} />;
};

export default ProductDetailPage;
