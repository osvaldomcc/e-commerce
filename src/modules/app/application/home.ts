import Product1 from '/images/products/for-home/for-home-1-1-580x870.jpg';
import Product2 from '/images/products/for-home/for-home-1-580x870.jpg';

import Product3 from '/images/products/for-home/for-home-2-2-580x870.jpg';
import Product4 from '/images/products/for-home/for-home-2-580x870.jpg';

import Product5 from '/images/products/for-home/for-home-3-1-580x870.jpg';
import Product6 from '/images/products/for-home/for-home-3-580x870.jpg';

import Product7 from '/images/products/for-home/for-home-4-580x870.jpg';

import Product8 from '/images/products/for-home/for-home-5-1-580x870.jpg';
import Product9 from '/images/products/for-home/for-home-5-580x870.jpg';

import Product10 from '/images/products/for-home/for-home-6-580x870.jpg';

import Product11 from '/images/products/for-home/for-home-7-1-580x870.jpg';
import Product12 from '/images/products/for-home/for-home-7-580x870.jpg';

import Product13 from '/images/products/for-home/for-home-8-1-580x870.jpg';
import Product14 from '/images/products/for-home/for-home-8-580x870.jpg';

import Product15 from '/images/products/for-home/for-home-9-1-580x870.jpg';
import Product16 from '/images/products/for-home/for-home-9-580x870.jpg';

import Product17 from '/images/products/for-home/for-home-10-1-580x870.jpg';
import Product18 from '/images/products/for-home/for-home-10-580x870.jpg';

import Product19 from '/images/products/for-home/for-home-11-1-580x870.jpg';
import Product20 from '/images/products/for-home/for-home-11-580x870.jpg';

import Product21 from '/images/products/for-home/for-home-12-1-580x870.jpg';
import Product22 from '/images/products/for-home/for-home-12-580x870.jpg';

import Product23 from '/images/products/for-home/for-home-13-1-580x870.jpg';
import Product24 from '/images/products/for-home/for-home-13-580x870.jpg';

import Product25 from '/images/products/for-home/for-home-14-1-580x870.jpg';
import Product26 from '/images/products/for-home/for-home-14-580x870.jpg';

import Product27 from '/images/products/for-home/for-home-15-1-580x870.jpg';
import Product28 from '/images/products/for-home/for-home-15-580x870.jpg';

import Product29 from '/images/products/for-home/for-home-16-1-580x870.jpg';
import Product30 from '/images/products/for-home/for-home-16-580x870.jpg';

import type { Product } from 'modules/poduct/domain/Product';
import { createProduct } from './data';

const homeList = [
	[Product1, Product2],
	[Product3, Product4],
	[Product5, Product6],
	[Product7],
	[Product8, Product9],
	[Product10],
	[Product11, Product12],
	[Product13, Product14],
	[Product15, Product16],
	[Product17, Product18],
	[Product19, Product20],
	[Product21, Product22],
	[Product23, Product24],
	[Product25, Product26],
	[Product27, Product28],
	[Product29, Product30],
];

export const home: Product[] = homeList.map((list) => createProduct(list, 'For Home'));
