import { MenuSlide, ShoppingCart } from 'sections/app/components';
import { useNavigation } from 'sections/app/hooks';

export interface MenuList {
	name: string;
	path: string;
}

const menuList: MenuList[] = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'shop features',
		path: '/shop-features',
	},
	{
		name: 'clothes',
		path: '/clothes',
	},
	{
		name: 'pages',
		path: '/pages',
	},
	{
		name: 'shortcodes',
		path: '/shortcodes',
	},
	{
		name: 'post types',
		path: '/post-types',
	},
];

const Navbar = () => {
	const { navigate } = useNavigation();

	const handleOnSelected = (index: number) => {
		navigate(menuList[index].path);
	};

	return (
		<nav className='menu'>
			<MenuSlide items={menuList} onSelected={handleOnSelected} />
			<div className='menu__media'>
				<i className='fa fa-heart-o'></i>
				<ShoppingCart />
				<i className='fa fa-search'></i>
			</div>
		</nav>
	);
};

export default Navbar;
