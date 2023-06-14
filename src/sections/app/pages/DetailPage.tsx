import { useEffect } from 'react';

import { Category } from 'modules/category/domain/Category';
import { ProductContent, ProductDescription, ProductListItem } from 'sections/product/components';
import { useProductContext } from 'sections/product/hooks/useProductContext';

import { faker } from '@faker-js/faker';

const headers = ['description', 'additional information', 'reviews(1)'];
const content = faker.lorem.paragraph(20);

const DetailPage = () => {
	const { product, products, getProductsByCat } = useProductContext();

	useEffect(() => {
		const category = product?.category ?? 'For Babies';
		getProductsByCat(category as Category);
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
				{product && <ProductContent product={product} />}
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
