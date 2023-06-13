import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Banner, Footer, Header } from 'sections/app/components';

const MainLayout = () => {
	return (
		<>
			<Banner variant='primary'>
				<span>20% off all kidswear + free shipping when you spend $60 or more</span>
			</Banner>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
			<Banner>
				<span className='p-16'>
					This website uses cookies to improve your expirience. We'll assume you're ok with this,
					but you can opt-out if you wish.
				</span>
				<button className='btn btn-black'>Accept</button>
			</Banner>
			<ScrollRestoration />
		</>
	);
};

export default MainLayout;
