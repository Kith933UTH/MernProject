import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="max-w-[1200px] mx-auto min-h-screen">
				{children}
			</div>

			<Footer />
		</>
	);
};

export default MainLayout;
