import ProductDetailPage from '../../pages/ProductDetailPage';
import { cateList } from '../category';

const ProductRoute = cateList.map((cate) => {
	return {
		path: cate.toString().concat('/:productId'),
		element: <ProductDetailPage />,
	};
});

export default ProductRoute;
