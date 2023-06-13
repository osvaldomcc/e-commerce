import { NewsLetter } from 'sections/app/components';
import {
	ProductBestSellers,
	ProductCategories,
	ProductList,
	ProductSearch,
} from 'sections/product/components';

const ProductSection = () => {
	return (
		<section className='product-section'>
			<div className='header-section'>
				<h1>NEW ARRIVALS</h1>
			</div>
			<div className='product-section__content'>
				<aside>
					<ProductSearch />
					<ProductCategories />
					<ProductBestSellers />
					<NewsLetter />
				</aside>
				<div className='product-section__content product'>
					<ProductList />
				</div>
			</div>
		</section>
	);
};

export default ProductSection;
