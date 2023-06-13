import { Suspense } from 'react';

import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { router } from 'sections/app/router';
import { MainLoader } from 'sections/app/components';
import ProductProvider from 'sections/product/contexts/ProductContext';

const App = () => {
	return (
		<Suspense fallback={<MainLoader />}>
			<ProductProvider>
				<RouterProvider router={router} />
			</ProductProvider>
			<ToastContainer />
		</Suspense>
	);
};

export default App;
