import { useProductContext } from 'sections/product/hooks/useProductContext';
import { ProductListItem } from 'sections/product/components';

const ProductList = () => {
	const { products } = useProductContext();
	return (
		<>
			{products.length === 0 && (
				<div className='no-product'>
					<h1>No se encontaron Productos</h1>
				</div>
			)}
			<div className='product-list'>
				{products.map((product) => (
					<ProductListItem product={product} key={product.sku} />
				))}
			</div>
		</>
	);
};

export default ProductList;
