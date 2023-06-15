import { act } from '@testing-library/react';

import { useProductContext } from 'sections/product/hooks/useProductContext';
import { renderHook } from 'tests/utils/test-utils';

const renderCustomHook = () => renderHook(useProductContext);

describe('useProductContext', () => {
	it('should has a product', () => {
		const { result } = renderCustomHook();
		expect(result.current.product).not.toBeNull();
	});

	it('should has cart size in 0', () => {
		const { result } = renderCustomHook();

		expect(result.current.cartSize).toBe(0);
	});

	it('should has 12 products', () => {
		const { result } = renderCustomHook();

		expect(result.current.products).toHaveLength(12);
	});

	it('should has 5 best sellers', () => {
		const { result } = renderCustomHook();

		expect(result.current.bestSellers).toHaveLength(5);
	});

	it('should add to cart', () => {
		const { result } = renderCustomHook();
		act(() => result.current.addToCart(result.current.products[1].sku));
		expect(result.current.cartSize).toBe(1);
	});

	it('should not add to cart if stock is 0', () => {
		const { result } = renderCustomHook();
		act(() => result.current.addToCart(result.current.products[0].sku));
		expect(result.current.cartSize).toBe(0);
	});

	it('should bring all products with the same category', () => {
		const category = 'For Boys';

		const { result } = renderCustomHook();
		act(() => result.current.getProductsByCat(category));
		const containTheSameCategory = result.current.products.every(
			(product) => product.category === category
		);
		expect(containTheSameCategory).toBeTruthy();
	});

	it('should set a product', () => {
		const { result } = renderCustomHook();
		const pickedProduct = result.current.products[3];
		act(() => result.current.setSelectedProduct(pickedProduct));
		expect(result.current.product?.sku).toBe(pickedProduct.sku);
	});

	it('should remove a product from cart', () => {
		const { result } = renderCustomHook();
		const productSku = result.current.products[1].sku;
		act(() => result.current.addToCart(productSku));
		act(() => result.current.removeFromCart(productSku));
		expect(result.current.cartSize).toBe(0);
	});
});
