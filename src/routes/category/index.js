import Category from '../../components/Category/Category';
import CateList from '../../config/CateList';
import CategoryPage from '../../pages/CategoryPage';
import ProductDetailPage from '../../pages/ProductDetailPage';

const CateRoute = CateList.map((cate) => {
	return {
		path: cate.path,
		element: <CategoryPage />,
		children: [
			{
				index: true,
				element: <Category type={cate} />,
			},
			{
				path: ':productId',
				element: <ProductDetailPage cateName={cate.title} />,
			},
		],
	};
});

const SubCateRoute = CateList.filter((cate) => cate.children).map((cate) => {
	return cate.children.map((subCate) => {
		return {
			path: subCate.path,
			element: <CategoryPage />,
			children: [
				{
					index: true,
					element: <Category type={subCate} />,
				},
				{
					path: ':productId',
					element: <ProductDetailPage cateName={subCate.title} />,
				},
			],
		};
	});
});

export default CateRoute.concat(SubCateRoute.flat());
