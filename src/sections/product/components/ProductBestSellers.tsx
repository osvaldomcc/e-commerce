import { LazyImage } from 'sections/app/components';
import { useProductContext } from 'sections/product/hooks/useProductContext';
import { ProductRate } from '.';

const ProductBestSellers = () => {
	const { bestSellers } = useProductContext();
	return (
		<div className='product-sell'>
			<h1>Best Sellers</h1>
			<div className='product-sell__list'>
				<ul>
					{bestSellers.map((product) => (
						<li key={product.sku}>
							<div className='product-sell__image'>
								<LazyImage src={product.images[0]} alt={product.name} width={70} height={100} />
							</div>
							<div className='product-sell__info'>
								<h5>{product.name}</h5>
								<ProductRate rate={product.rate} />
								<span>${`${product.price}.00`}</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProductBestSellers;
