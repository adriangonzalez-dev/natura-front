import { Dispatch, createContext } from 'react';
import { IProducts } from '../../components/products/interfaces';

export interface ChartItems extends IProducts {
    quantity: number
}

interface ChartContextType {
    chart: {
      data: ChartItems[];
      total: number,
    };
    dispatchChart: Dispatch<any>; // O utiliza el tipo adecuado para tus acciones
  }

export const ChartContext = createContext<ChartContextType>({
    chart: {
        data:[],
        total: 0
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    dispatchChart: () => {}
});