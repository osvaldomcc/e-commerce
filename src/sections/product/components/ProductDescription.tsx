import { FC, useRef, useState } from 'react';

interface Props {
	items: string[];
	onSelected?: (index: number) => void;
}

const UNDERLINE_SIZE = 35;

const ProductDescription: FC<Props> = ({ items, onSelected }) => {
	const menuRef = useRef<HTMLUListElement>(null);

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
		onSelected && onSelected(index);
	};

	return (
		<>
			<ul className='menu__list' onClick={handleMenuClick} ref={menuRef}>
				{items.map((name, index) => (
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

export default ProductDescription;
