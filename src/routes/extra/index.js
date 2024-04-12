import AboutPage from '../../pages/AboutPage';
import CheckoutPage from '../../pages/CheckoutPage';
import ContactPage from '../../pages/ContactPage';
import PolicyPage from '../../pages/PolicyPage';
import SearchPage from '../../pages/SearchPage';

const ExtraRoute = [
	{
		path: 'checkout',
		element: <CheckoutPage />,
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
		element: <SearchPage />,
	},
];

export default ExtraRoute;
