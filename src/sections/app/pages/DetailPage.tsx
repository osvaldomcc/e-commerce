import { useEffect, useState } from 'react';

import { Category } from 'modules/category/domain/Category';
import { ProductDescription, ProductListItem, ProductRate } from 'sections/product/components';
import { useProductContext } from 'sections/product/hooks/useProductContext';
import { Gallery } from 'sections/app/components';

const headers = ['description', 'additional information', 'reviews(1)'];
const content = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
	dolor quos velit eos sit. Dolor obcaecati beatae quaerat commodi
	placeat enim numquam eum facilis sequi voluptate,
	quia deleniti ipsam dolorem unde alias, necessitatibus ratione
	soluta odit quae ex similique laboriosam. Perferendis fuga esse reprehenderit
	illo consequuntur nihil quos incidunt exercitationem saepe. Delectus harum ut
	laudantium et sed est nostrum quam quisquam provident necessitatibus doloremque,
	iste assumenda non magnam rerum! Dicta voluptatum delectus blanditiis ex sequi corporis
	nobis perspiciatis eos odio architecto, fuga tempore porro quaerat! Necessitatibus dignissimos
	placeat a aliquid ea itaque maxime deleniti blanditiis veniam! Quia nisi ex cum?`;

const DetailPage = () => {
	const { product, products, getProductsByCat } = useProductContext();
	const [selectedImage, setSelectedImage] = useState<string>('');

	useEffect(() => {
		const category = product?.category ?? 'For Babies';
		getProductsByCat(category as Category);
		setSelectedImage(product?.images[0] ?? '');
	}, [getProductsByCat, product]);

	return (
		<div className='product-detail'>
			<div className='product-detail__header'>
				<h1>{product?.name}</h1>
				<p>
					Home : {product?.category} : <span>{product?.name}</span>
				</p>
			</div>
			<div className='wrapper'>
				<div className='product-detail__content'>
					<div className='product-detail__content--left'>
						<Gallery image={selectedImage} name={product?.name} width={580} height={870} />
						<div className='product-detail__carousel'>
							{product?.images.map((image, index) => (
								<img
									onClick={() => setSelectedImage(image)}
									src={image}
									alt={`${product.name}-${index + 1}`}
									key={index}
									width={80}
									height={120}
								/>
							))}
						</div>
					</div>
					<div className='product-detail__content--right'>
						<div>
							<h4>${`${product?.price}.00`}</h4>
							<ProductRate rate={product?.rate ?? 0} />
						</div>
						<p>{product?.description}</p>
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
									<h4>SKU:</h4> <span>{product?.sku}</span>
								</li>
								<li>
									<h4>Category:</h4> <span>{product?.category}</span>
								</li>
								<li>
									<h4>Tags:</h4> <span>{product?.tags.join(', ')}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='product-detail__description'>
					<ProductDescription items={headers} />
					<p>{content}</p>
				</div>
				<div className='header-section'>
					<h1>RELATED PRODUCTS</h1>
				</div>
				<div className='product-detail__related'>
					{products.slice(0, 4).map((item) => (
						<ProductListItem product={item} key={item.sku} showRate />
					))}
				</div>
			</div>
		</div>
	);
};

export default DetailPage;
