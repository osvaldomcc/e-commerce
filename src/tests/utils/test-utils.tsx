import { RenderHookOptions, render, renderHook } from '@testing-library/react';
import ProductProvider from 'sections/product/contexts/ProductContext';

const wraper = (children: React.ReactElement) => <ProductProvider>{children}</ProductProvider>;

function customRender(ui: React.ReactElement, options = {}) {
	return render(ui, {
		// wrap provider(s) here if needed
		wrapper: ({ children }) => wraper(children),
		...options,
	});
}

function customRenderHook<T, S>(
	hook: (initialProps: T) => S,
	options: Omit<RenderHookOptions<T>, 'wrapper'> = {}
) {
	return renderHook(hook, {
		wrapper: ({ children }) => wraper(children),
		...options,
	});
}

export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render, customRenderHook as renderHook };
