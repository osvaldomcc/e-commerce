import LogoRetinaWhite from '/images/logo-retina-white.png';
import { LazyImage } from 'sections/app/components';

const menu: string[] = ['SHOP', 'SALE', 'GIRLS', 'BOYS', 'LOOKBOOK', 'CONTACTS'];

const Footer = () => {
	return (
		<footer className='box'>
			<div className='box__content'>
				<LazyImage width={233} height={78} alt='logo' src={LogoRetinaWhite} />
				<ul className='menu'>
					{menu.map((item) => (
						<li className='menu__item' key={item}>
							{item}
						</li>
					))}
				</ul>
				<div className='box__media'>
					<i className='fa fa-facebook'></i>
					<i className='fa fa-instagram'></i>
					<i className='fa fa-twitter'></i>
				</div>
				<p>
					<span>Privacy Policy</span> / This is a sample website - cmsmasters &copy; 2022 / All
					Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
