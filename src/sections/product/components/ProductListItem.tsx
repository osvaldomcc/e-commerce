import { FC } from 'react';

import { Product } from 'modules/poduct/domain/Product';
import { ProductImageView, ProductRate } from 'sections/product/components';
import { useProductContext } from 'sections/product/hooks/useProductContext';
import { useNavigation } from 'sections/app/hooks';

interface Props {
	product: Product;
	showRate?: boolean;
}

const ProductListItem: FC<Props> = ({ product, showRate = false }) => {
	const { setSelectedProduct, addToCart } = useProductContext();
	const { navigate } = useNavigation();

	const isOutOfStock = product.stock === 0;

	const handleClick = () => {
		setSelectedProduct(product);
		navigate(`/detail/${product.sku}`);
	};

	const handleCartOrFavorite = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		ev.stopPropagation();
		addToCart(product.sku);
	};

	return (
		<div className='product-item'>
			<div className='product-item__image' onClick={handleClick}>
				<ProductImageView images={product.images} name={product.name} />
				<div className='btn-container' onClick={handleCartOrFavorite}>
					<button className='btn btn-primary filled'>
						<div className={`product-item__image--info ${isOutOfStock ? 'center' : ''}`}>
							<i className='fa fa-heart-o'></i>
							{!isOutOfStock && (
								<>
									<span>Add to cart</span>
									<i className='fa fa-search'></i>
								</>
							)}
						</div>
					</button>
				</div>
			</div>
			<div className='product-item__description'>
				<span>{product.category}</span>
				<h1>{product.name}</h1>
				<span>${`${product.price}.00`}</span>
				{isOutOfStock && <span className='no-stock'>OUT OF STOCK</span>}
				{showRate && <ProductRate rate={product.rate} />}
			</div>
		</div>
	);
};

export default ProductListItem;
