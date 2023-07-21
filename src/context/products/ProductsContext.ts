import { createContext, Dispatch } from 'react';
import { IProducts } from '../../components/products/interfaces';


interface ProductsContextType {
  products: {
    data: IProducts[];
  };
  dispatchProducts: Dispatch<any>; // O utiliza el tipo adecuado para tus acciones
}

const ProductsContext = createContext<ProductsContextType>({
  products: {
    data: []
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatchProducts: () => {} // Valor inicial vacío para dispatchProducts
});

export default ProductsContext;