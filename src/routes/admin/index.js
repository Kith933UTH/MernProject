import ChooseNewAttribute from '../../components/Admin/Attributes/ChooseNewAttribute';
import Dashboard from '../../components/Admin/Dashboard';
import ChooseNewProduct from '../../components/Admin/Products/ChooseNewProduct';

const AdminRoute = [
	{
		index: true,
		element: <Dashboard />,
	},
	{
		path: 'products',
		children: [
			{
				index: true,
				element: <ChooseNewProduct />,
			},
			{
				path: 'laptop',
				children: [
					{ index: true, element: 'all laptop' },
					{ path: 'new', element: <div>new laptop</div> },
					{
						path: 'attributes',
						element: <div>new laptop attribute</div>,
					},
					{ path: ':productId', element: <div>laptop detail</div> },
				],
			},
			{
				path: 'phone',
				children: [
					{ index: true, element: 'all phone' },
					{ path: 'new', element: <div>new phone</div> },
					{
						path: 'attributes',
						element: <div>new laptop attribute</div>,
					},

					{ path: ':productId', element: <div>phone detail</div> },
				],
			},
			{
				path: 'tablet',
				children: [
					{ index: true, element: 'all tablet' },
					{ path: 'new', element: <div>new tablet</div> },
					{
						path: 'attributes',
						element: <div>new laptop attribute</div>,
					},

					{ path: ':productId', element: <div>tablet detail</div> },
				],
			},
			{
				path: 'smartwatch',
				children: [
					{ index: true, element: 'all smartwatch' },
					{ path: 'new', element: <div>new smartwatch</div> },
					{
						path: 'attributes',
						element: <div>new laptop attribute</div>,
					},

					{
						path: ':productId',
						element: <div>smartwatch detail</div>,
					},
				],
			},
			{
				path: 'charger',
				children: [
					{ index: true, element: 'all charger' },
					{ path: 'new', element: <div>new charger</div> },
					{
						path: 'attributes',
						element: <div>new laptop attribute</div>,
					},

					{ path: ':productId', element: <div>charger detail</div> },
				],
			},
			{
				path: 'cable',
				children: [
					{ index: true, element: 'all cable' },
					{ path: 'new', element: <div>new cable</div> },
					{
						path: 'attributes',
						element: <div>new laptop attribute</div>,
					},

					{ path: ':productId', element: <div>cable detail</div> },
				],
			},
			{
				path: 'headphone',
				children: [
					{ index: true, element: 'all headphone' },
					{ path: 'new', element: <div>new headphone</div> },
					{
						path: 'attributes',
						element: <div>new laptop attribute</div>,
					},

					{
						path: ':productId',
						element: <div>headphone detail</div>,
					},
				],
			},
			{
				path: 'mouse',
				children: [
					{ index: true, element: 'all mouse' },
					{ path: 'new', element: <div>new mouse</div> },
					{
						path: 'attributes',
						element: <div>new laptop attribute</div>,
					},

					{
						path: ':productId',
						element: <div>mouse detail</div>,
					},
				],
			},
			{
				path: 'keyboard',
				children: [
					{ index: true, element: 'all keyboard' },
					{ path: 'new', element: <div>new keyboard</div> },
					{
						path: 'attributes',
						element: <div>new laptop attribute</div>,
					},

					{
						path: ':productId',
						element: <div>keyboard detail</div>,
					},
				],
			},
		],
	},
	{
		path: 'attributes',
		children: [
			{
				index: true,
				element: <ChooseNewAttribute />,
			},
		],
	},
	{
		path: 'customers',
		children: [
			{ index: true, element: <div>all customers</div> },
			{ path: ':customerId', element: <div>customer page</div> },
		],
	},
	{
		path: 'orders',
		children: [
			{ index: true, element: <div>all orders</div> },
			{ path: ':orderId', element: <div>order page</div> },
		],
	},
];

export default AdminRoute;
