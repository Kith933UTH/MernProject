import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from './ProductCard/ProductCard';
import { ProductCardSkeleton } from './ProductCard/ProductCardSkeleton';
import { ScrollToTop } from '../../utils';
import { remainProductListSelector } from '../../redux/Selector/ProductSelector';

const perPage = 12;

const ProductList = ({ type }) => {
	const products = useSelector(remainProductListSelector);

	const [active, setActive] = useState(1);
	const lengthOfPage = Math.ceil(products.data.length / perPage);

	useEffect(() => setActive(1), [products]);

	const next = () => {
		if (active === lengthOfPage) return;
		setActive(active + 1);
	};

	const prev = () => {
		if (active === 1) return;
		setActive(active - 1);
	};

	useEffect(() => {
		ScrollToTop();
	}, [active]);

	return (
		!products.isError && (
			<>
				<div className="w-full mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4">
					{products.isLoading ? (
						<>
							<ProductCardSkeleton />
							<ProductCardSkeleton />
							<ProductCardSkeleton />
							<ProductCardSkeleton />
							<ProductCardSkeleton />
							<ProductCardSkeleton />
							<ProductCardSkeleton />
							<ProductCardSkeleton />
						</>
					) : (
						products.data
							.map((product, index) =>
								index < active * perPage &&
								index >= (active - 1) * perPage ? (
									<ProductCard
										key={product.id}
										data={product}
									/>
								) : null
							)
							.filter((item) => item !== null)
					)}
				</div>
				<Pagination
					lengthOfPage={lengthOfPage}
					active={active}
					next={next}
					prev={prev}
				/>
			</>
		)
	);
};

export default ProductList;
