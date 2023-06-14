import { render } from '@testing-library/react';
import ProductProvider from 'sections/product/contexts/ProductContext';

function customRender(ui: React.ReactElement, options = {}) {
	return render(ui, {
		// wrap provider(s) here if needed
		wrapper: ({ children }) => <ProductProvider>{children}</ProductProvider>,
		...options,
	});
}
//

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
