import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import PolicyPage from '../../pages/PolicyPage';

const ExtraRoute = [
	{
		path: 'checkout',
		element: <h1>checkout page</h1>,
	},
	{
		path: 'about',
		element: <AboutPage />,
	},
	{
		path: 'policy',
		element: <PolicyPage />,
	},
	{
		path: 'contact',
		element: <ContactPage />,
	},
	{
		path: 'search',
		element: <h1>search page</h1>,
	},
];

export default ExtraRoute;
