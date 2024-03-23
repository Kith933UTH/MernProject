import { Outlet, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import CateRoute from './category';
import ProductRoute from './product';
import AdminPage from '../pages/AdminPage';
import AdminRoute from './admin';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
	// ...ProductRoute,
	{
		path: '/',
		element: (
			<MainLayout>
				<Outlet />
			</MainLayout>
		),
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			...CateRoute,
		],
	},
	{
		path: 'admin',
		element: <AdminPage />,
		children: [...AdminRoute],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

export default router;
