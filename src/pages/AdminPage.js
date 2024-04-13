import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Admin/Sidebar';
import Header from '../components/Admin/Header';

const AdminPage = () => {
	return (
		<div className="flex min-h-screen">
			<div className="fixed top-0 left-0 right-0 h-14 shadow-md shadow-gray-300 z-[100]">
				<Header />
			</div>
			<div className="w-1/6 fixed top-0 left-0 bottom-0 pt-[58px]">
				<Sidebar />
			</div>
			<div className="flex-1 pl-[calc(100%/6)] bg-white pt-[58px]">
				<div className="p-4 h-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
