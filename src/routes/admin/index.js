import Dashboard from '../../components/admin/Dashboard';
import ProductList from '../../components/admin/ProductList';

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
