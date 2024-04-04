import React from 'react';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from './ProductCard/ProductCard';
import { ProductCardSkeleton } from './ProductCard/ProductCardSkeleton';

const ProductList = ({ type }) => {
	console.log('list render');
	const [active, setActive] = React.useState(1);
	const lengthOfPage = 10;
	const next = () => {
		if (active === lengthOfPage) return;

		setActive(active + 1);
	};

	const prev = () => {
		if (active === 1) return;

		setActive(active - 1);
	};

	return (
		<>
			<div className="w-full mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCardSkeleton />
				<ProductCardSkeleton />
				<ProductCardSkeleton />
				<ProductCardSkeleton />
				<ProductCardSkeleton />
			</div>
			<Pagination
				lengthOfPage={lengthOfPage}
				active={active}
				next={next}
				prev={prev}
			/>
		</>
	);
};

export default ProductList;
