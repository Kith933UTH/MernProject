import React from 'react';

import useScrollTop from '../hooks/useScrollTop';

const AdminListLayout = ({ children }) => {
	useScrollTop();
	return (
		<div className="max-w-[1200px] mx-auto min-h-screen ">{children}</div>
	);
};

export default AdminListLayout;
