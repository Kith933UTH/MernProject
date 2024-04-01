import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Admin/Sidebar';

const AdminPage = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div>
			<Sidebar
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
			/>
			<Outlet />
		</div>
	);
};

export default AdminPage;
