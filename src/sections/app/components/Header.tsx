import { LazyImage, Navbar } from 'sections/app/components';

import LogoRetina from '/images/logo-retina.png';

const Header = () => {
	return (
		<header className='header'>
			<LazyImage width={293} height={98} alt='logo' src={LogoRetina} />
			<Navbar />
		</header>
	);
};

export default Header;
