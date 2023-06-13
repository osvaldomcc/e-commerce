import Product1 from '/images/products/for-babies/for-babies-1-580x870.jpg';
import Product2 from '/images/products/for-babies/for-babies-1-1-580x870.jpg';

import Product3 from '/images/products/for-babies/for-babies-2-580x870.jpg';
import Product4 from '/images/products/for-babies/for-babies-2-1-580x870.jpg';

import Product5 from '/images/products/for-babies/for-babies-3-580x870.jpg';
import Product6 from '/images/products/for-babies/for-babies-3-1-580x870.jpg';

import Product7 from '/images/products/for-babies/for-babies-4-580x870.jpg';
import Product8 from '/images/products/for-babies/for-babies-4-1-580x870.jpg';

import Product9 from '/images/products/for-babies/for-babies-5-580x870.jpg';
import Product10 from '/images/products/for-babies/for-babies-5-1-580x870.jpg';

import Product11 from '/images/products/for-babies/for-babies-6-580x870.jpg';
import Product12 from '/images/products/for-babies/for-babies-6-1-580x870.jpg';

import Product13 from '/images/products/for-babies/for-babies-7-580x870.jpg';
import Product14 from '/images/products/for-babies/for-babies-7-1-580x870.jpg';

import Product15 from '/images/products/for-babies/for-babies-8-580x870.jpg';
import Product16 from '/images/products/for-babies/for-babies-8-1-580x870.jpg';

import Product17 from '/images/products/for-babies/for-babies-9-580x870.jpg';
import Product18 from '/images/products/for-babies/for-babies-9-1-580x870.jpg';

import Product19 from '/images/products/for-babies/for-babies-10-580x870.jpg';
import Product20 from '/images/products/for-babies/for-babies-10-1-580x870.jpg';

import Product21 from '/images/products/for-babies/for-babies-11-580x870.jpg';
import Product22 from '/images/products/for-babies/for-babies-11-1-580x870.jpg';

import type { Product } from 'modules/poduct/domain/Product';
import { createProduct } from './data';

const babyList = [
	[Product1, Product2],
	[Product3, Product4],
	[Product5, Product6],
	[Product7, Product8],
	[Product9, Product10],
	[Product11, Product12],
	[Product13, Product14],
	[Product15, Product16],
	[Product17, Product18],
	[Product19, Product20],
	[Product21, Product22],
];

export const babies: Product[] = babyList.map((list) => createProduct(list, 'For Babies'));
