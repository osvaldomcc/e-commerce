import Product1 from '/images/products/for-play/toys-1-2-580x870.jpg';
import Product2 from '/images/products/for-play/toys-1-580x870.jpg';

import Product3 from '/images/products/for-play/toys-2-580x870.jpg';

import Product4 from '/images/products/for-play/toys-3-580x870.jpg';

import Product5 from '/images/products/for-play/toys-4-2-580x870.jpg';
import Product6 from '/images/products/for-play/toys-4-580x870.jpg';

import Product7 from '/images/products/for-play/toys-5-580x870.jpg';

import Product8 from '/images/products/for-play/toys-6-580x870.jpg';

import type { Product } from 'modules/poduct/domain/Product';
import { createProduct } from './data';

const playList = [
	[Product1, Product2],
	[Product3],
	[Product4],
	[Product5, Product6],
	[Product7],
	[Product8],
];

export const play: Product[] = playList.map((list) => createProduct(list, 'For Play'));
