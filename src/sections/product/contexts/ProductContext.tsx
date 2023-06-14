import { useEffect, useState, FC, createContext } from 'react';

import type { Product } from 'modules/poduct/domain/Product';
import { getAllProducts } from 'modules/poduct/application/get-all/getAllProducts';
import { ComponentProps } from 'sections/app/interfaces';
import { Category } from 'modules/category/domain/Category';
import { getProductsByCategory } from 'modules/poduct/application/get/getProductsByCat';

interface IProductContext {
	cartSize: number;
	product: Product | undefined;
	products: Product[];
	bestSellers: Product[];
	addToCart: (sku: string) => void;
	removeFromCart: (sku: string) => void;
	getProductsByCat: (category: Category) => void;
	setSelectedProduct: (item: Product) => void;
	searchProductsByName: (query: string) => void;
}

export const ProductContext = createContext<IProductContext>({
	cartSize: 0,
	product: undefined,
	products: [],
	bestSellers: [],
	addToCart: () => ({}),
	removeFromCart: () => ({}),
	getProductsByCat: () => ({}),
	setSelectedProduct: () => ({}),
	searchProductsByName: () => ({}),
});

type CartType = Map<string, { product: Product; qty: number }>;

const ProductProvider: FC<ComponentProps> = ({ children }) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [cart, setCart] = useState<CartType>(new Map());
	const [bestSellers, setBestSellers] = useState<Product[]>([]);
	const [product, setProduct] = useState<Product | undefined>(undefined);

	useEffect(() => {
		initProducts();
	}, []);

	// Product
	const getProductsByCat = (category: Category) => {
		setProducts(getProductsByCategory(category));
	};

	const setSelectedProduct = (item: Product) => {
		setProduct(item);
	};

	const searchProductsByName = (query: string) => {
		if (query === '') {
			initProducts();
			return;
		}
		const items = products.filter((product) => product.name.toLowerCase().includes(query));
		setProducts(items);
	};

	const initProducts = () => {
		const allProducts = getAllProducts();
		setProducts(allProducts);
		setBestSellers(allProducts.slice(0, 5));
		setProduct(allProducts[Math.floor(Math.random() * allProducts.length)]);
	};
	// End Product

	// Cart
	const addToCart = (sku: string) => {
		let productToAdd;
		let qty = 1;

		const newItems = products.map((value) => {
			if (value.sku === sku) {
				qty = Math.max(0, value.stock - 1);
				const updated = { ...value, stock: qty };
				productToAdd = updated;
				return updated;
			}
			return value;
		});
		setProducts(newItems);

		if (!productToAdd || qty === 0) return;

		const itemInCart = cart?.get(sku);

		if (itemInCart) {
			const newItem: { product: Product; qty: number } = {
				product: productToAdd,
				qty: itemInCart.qty + 1,
			};
			setCart(cart?.set(sku, newItem));
			return;
		}
		setCart(cart?.set(sku, { product: productToAdd, qty: 1 }));
	};

	const removeFromCart = (sku: string) => {
		let productToRemove;

		let newItems = products.map((value) => {
			if (value.sku === sku) {
				const updated = { ...value, stock: value.stock + 1 };
				productToRemove = updated;
				return updated;
			}
			return value;
		});

		const itemInCart = cart?.get(sku);

		if (!productToRemove && itemInCart) {
			newItems = [...newItems, itemInCart.product];
		}

		setProducts(newItems);

		cart?.delete(sku);

		setCart(cart);
	};
	// End Cart

	// Favorites
	// End Favorites

	return (
		<ProductContext.Provider
			value={{
				product,
				products,
				bestSellers,
				cartSize: cart.size,
				addToCart,
				removeFromCart,
				getProductsByCat,
				setSelectedProduct,
				searchProductsByName,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
