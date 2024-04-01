import Dashboard from '../../components/Admin/Dashboard';
import ProductList from '../../components/Admin/ProductList';

const AdminRoute = [
	{
		index: true,
		element: <Dashboard />,
	},
	{
		path: 'product-list',
		element: <ProductList />,
	},
];

export default AdminRoute;
