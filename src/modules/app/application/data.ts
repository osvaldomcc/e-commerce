import type { Product } from 'modules/poduct/domain/Product';
import { faker } from '@faker-js/faker';

export const createProduct = (images: string[], category: string): Product => {
	return {
		name: faker.commerce.productName(),
		price: Number(faker.commerce.price()),
		stock: Math.floor(Number(faker.finance.amount(0, 100))),
		category,
		tags: [faker.commerce.department(), faker.commerce.department()],
		description: faker.word.words({ count: 5 }),
		moreInfo: faker.word.words({ count: 5 }),
		rate: faker.number.int({ min: 0, max: 5 }),
		sku: faker.string.uuid(),
		images,
	};
};
