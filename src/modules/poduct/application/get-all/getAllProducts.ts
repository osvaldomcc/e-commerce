import { babies, boys, girls, home, play } from 'modules/app/application';
import { Product } from 'modules/poduct/domain/Product';

const getItemsFromArr = (arr: Product[], pick: number): Product[] => {
	const items: Set<Product> = new Set();

	while (items.size <= pick - 1) {
		const position = Math.floor(Math.random() * arr.length);
		items.add(arr[position]);
	}

	return [...items];
};

export const getAllProducts = (): Product[] => {
	const products = [
		...getItemsFromArr(babies, 2),
		...getItemsFromArr(boys, 2),
		...getItemsFromArr(girls, 2),
		...getItemsFromArr(home, 3),
		...getItemsFromArr(play, 3),
	];

	const firstItem = products.shift();

	return firstItem ? [{ ...firstItem, stock: 0 }, ...products] : products;
};
