/* eslint-disable no-case-declarations */
import { ChartItems } from "./ChartContext";

export interface ChartState {
    data: ChartItems[],
    total: number,
}

export const initialState:ChartState = {
    data: [],
    total: 0,
}

export const TypesChart = {
    ADD_TO_CHART: 'ADD_TO_CHART',
    DELETE_FROM_CHART: 'DELETE_FROM_CHART',
    CLEAR_CHART: 'CLEAR_CHART',
}

export const reducer = (state:ChartState, action:any) => {
    switch (action.type) {
        case TypesChart.ADD_TO_CHART:
          const item = state.data.find(item => item.id === action.payload.id);
          if (item) {
            item.quantity += 1;
          } else {
            state.data.push({
              ...action.payload,
              quantity: 1
            });
          }
          state.total += action.payload.price;
          return { ...state };
  
        case TypesChart.DELETE_FROM_CHART:
          const itemToDelete = state.data.find(item => item.id === action.payload.id);
          if (itemToDelete) {
            itemToDelete.quantity -= 1;
          }
          state.total -= action.payload.price;
          return { ...state };
  
        case TypesChart.CLEAR_CHART:
          return {
            data: [],
            total: 0
          };
  
        default:
          return state;
      }
}