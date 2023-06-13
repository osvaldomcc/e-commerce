import { useContext } from 'react';

import { ProductContext } from 'sections/product/contexts/ProductContext';

export const useProductContext = () => useContext(ProductContext);
