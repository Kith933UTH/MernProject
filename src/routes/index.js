import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import AdminPage from '../pages/AdminPage';

import CateRoute from './category';
import AdminRoute from './admin';
import ExtraRoute from './extra';
import UserRoute from './user';

const isLogin = true;

const user = isLogin ? UserRoute : {};

const router = createBrowserRouter([
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
			...ExtraRoute,
			user,
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
