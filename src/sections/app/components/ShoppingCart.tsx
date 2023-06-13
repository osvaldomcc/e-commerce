import { useProductContext } from 'sections/product/hooks/useProductContext';

const ShoppingCart = () => {
	const { cartSize } = useProductContext();
	return (
		<div className='cart'>
			<div className='cart__badge'>{cartSize}</div>
			<i className='fa fa-cart-plus'></i>
		</div>
	);
};

export default ShoppingCart;
