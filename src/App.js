import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
	return (
		<div className="bg-background relative w-full min-h-screen text-text font-body">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
