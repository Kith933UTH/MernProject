import Category from '../../components/Category/Category';
import CategoryPage from '../../pages/CategoryPage';
import ProductDetailPage from '../../pages/ProductDetailPage';

export const cateList = [
	'all',
	'laptop',
	'phone',
	'tablet',
	'smartwatch',
	'accessories',
];

const CateRoute = cateList.map((cate) => {
	return {
		path: cate,
		element: <CategoryPage />,
		children: [
			{
				index: true,
				element: <Category />,
			},
			{
				path: ':productId',
				element: <ProductDetailPage />,
			},
		],
	};
});

export default CateRoute;
