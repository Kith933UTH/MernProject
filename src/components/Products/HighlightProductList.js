import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from './ProductCard/ProductCard';
import { ProductCardSkeleton } from './ProductCard/ProductCardSkeleton';
import { highlightProductsSelector } from '../../redux/Selector/ProductSelector';

const HighlightProductList = () => {
	const products = useSelector(highlightProductsSelector);
	return (
		!products.isError &&
		(products.data.length > 0 ? (
			<div className="w-full mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 desktop:grid-cols-5">
				{products.isLoading ? (
					<>
						<ProductCardSkeleton />
						<ProductCardSkeleton />
						<ProductCardSkeleton />
						<ProductCardSkeleton />
						<ProductCardSkeleton />
					</>
				) : (
					products.data.map((product) => (
						<ProductCard key={product.id} data={product} />
					))
				)}
			</div>
		) : null)
	);
};

export default HighlightProductList;
