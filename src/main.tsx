import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'App.tsx';
import 'sass/main.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
