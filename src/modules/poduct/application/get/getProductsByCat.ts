import { babies, boys, girls, home, play } from 'modules/app/application';
import { Category } from 'modules/category/domain/Category';
import { Product } from 'modules/poduct/domain/Product';

const productMap = {
	'For Babies': babies,
	'For Boys': boys,
	'For Girls': girls,
	'For Home': home,
	'For Play': play,
};

export const getProductsByCategory = (category: Category): Product[] => {
	return productMap[category];
};
