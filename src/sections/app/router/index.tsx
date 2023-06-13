import { createBrowserRouter } from 'react-router-dom';

import HomePage from 'sections/app/pages/HomePage';
import DetailPage from 'sections/app/pages/DetailPage';
import { MainLayout } from 'sections/app/router/lazyLoad';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: '/shop-features',
					element: <HomePage />,
				},
				{
					path: '/clothes',
					element: <HomePage />,
				},
				{
					path: '/pages',
					element: <HomePage />,
				},
				{
					path: '/shortcodes',
					element: <HomePage />,
				},
				{
					path: '/post-types',
					element: <HomePage />,
				},
				{
					path: 'detail/:productName',
					element: <DetailPage />,
				},
			],
		},
		{
			path: '*',
			element: <div>Not Found Page</div>,
		},
	],
	{
		basename: import.meta.env.BASE_URL,
	}
);
