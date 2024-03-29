import AllOrder from '../../components/order/AllOrder';
import OrderDetail from '../../components/order/OrderDetail';
import UserPage from '../../pages/UserPage';

const UserRoute = {
	path: 'user',
	element: <UserPage />,
	children: [
		{
			index: true,
			element: <h1>User home</h1>,
		},
		{
			path: 'order',
			children: [
				{
					index: true,
					element: <AllOrder />,
				},

				{
					path: ':orderId',
					element: <OrderDetail />,
				},
			],
		},
	],
};

export default UserRoute;
