import { FC, useEffect, useRef, useState } from 'react';
import { MenuList } from './Navbar';
import { useNavigation } from 'sections/app/hooks';

interface Props {
	items: MenuList[];
	onSelected: (index: number) => void;
}

const UNDERLINE_SIZE = 35;

const MenuSlide: FC<Props> = ({ items, onSelected }) => {
	const menuRef = useRef<HTMLUListElement>(null);
	const { location } = useNavigation();

	const [itemSelected, setItemSelected] = useState<number | undefined>();

	const handleMenuClick = (ev: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
		if (!menuRef.current) return;

		const event = ev.target as HTMLUListElement;

		menuRef.current.style.setProperty('--underline-width', `${event.offsetWidth}px`);
		const middle = Math.floor((event.offsetWidth - UNDERLINE_SIZE) / 2);
		menuRef.current.style.setProperty('--underline-offset-x', `${event.offsetLeft + middle}px`);
	};

	const handleSelected = (index: number) => {
		setItemSelected(index);
		onSelected(index);
	};

	useEffect(() => {
		for (const item of items.slice(1)) {
			if (location.pathname === '/' || location.pathname.includes(item.path)) {
				return;
			}
		}
		setItemSelected(undefined);
		menuRef.current?.style.removeProperty('--underline-width');
		menuRef.current?.style.removeProperty('--underline-offset-x');
	}, [location.pathname, items]);

	return (
		<>
			<ul className='menu__list' onClick={handleMenuClick} ref={menuRef}>
				{items.map(({ name }, index) => (
					<li className='menu__item' key={name}>
						<a
							className={`menu__link ${itemSelected === index ? 'active' : ''}`}
							onClick={() => handleSelected(index)}
						>
							{name}
						</a>
					</li>
				))}
			</ul>
		</>
	);
};

export default MenuSlide;
