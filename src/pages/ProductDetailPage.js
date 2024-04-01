import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/Products/ProductDetail';

const ProductDetailPage = ({ cate }) => {
	let { productId } = useParams();
	return <ProductDetail data={productId} cate={cate} />;
};

export default ProductDetailPage;
