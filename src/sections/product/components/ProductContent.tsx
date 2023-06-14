import { FC, useEffect, useState } from 'react';

import { ProductRate } from 'sections/product/components';
import { Gallery } from 'sections/app/components';
import type { Product } from 'modules/poduct/domain/Product';
import { formatPrice } from 'sections/app/utils/format';

interface Props {
	product: Product;
}

const ProductContent: FC<Props> = ({ product }) => {
	const { images, category, description, name, price, rate, sku, tags } = product;
	const [selectedImage, setSelectedImage] = useState<string>('');

	useEffect(() => {
		const [firstImage] = images;
		setSelectedImage(firstImage);
	}, [images]);

	return (
		<div className='product-detail__content'>
			<div className='product-detail__content--left'>
				<Gallery image={selectedImage} name={name} width={580} height={870} />
				<div className='product-detail__carousel'>
					{images.map((image, index) => (
						<img
							onClick={() => setSelectedImage(image)}
							src={image}
							alt={`${name}-${index + 1}`}
							key={index}
							width={80}
							height={120}
						/>
					))}
				</div>
			</div>
			<div className='product-detail__content--right'>
				<div>
					<h4>{formatPrice(price)}</h4>
					<ProductRate rate={rate} />
				</div>
				<p>{description}</p>
				<form>
					<input type='number' name='quantity' id='quantity' placeholder='0' />
					<div className='btn-container btn-container--primary'>
						<button className='btn btn-primary' type='button'>
							Add to Cart
						</button>
					</div>
				</form>
				<p>
					Product added <span>Browse Wishlist</span>
				</p>
				<div className='table'>
					<ul>
						<li>
							<h4>SKU:</h4> <span>{sku}</span>
						</li>
						<li>
							<h4>Category:</h4> <span>{category}</span>
						</li>
						<li>
							<h4>Tags:</h4> <span>{tags.join(', ')}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProductContent;
