export const TypesProducts = {
    GET_PRODUCTS:'GET_PRODUCTS',
    ADD_PRODUCTS:'ADD_PRODUCTS',
    UPDATE_PRODUCTS:'UPDATE_PRODUCTS',
    DELETE_PRODUCTS:'DELETE_PRODUCTS',
}

export const productInitialState = {
    data:[],
    isLoading: true
}

export const productsReducer = (state: any, action: any) => {
    switch (action.type) {
    case TypesProducts.GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case TypesProducts.ADD_PRODUCTS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case TypesProducts.DELETE_PRODUCTS:
      return {
        ...state,
        data: state.data.filter(
          (product: any) => product._id !== action.payload
        ),
      };
    case TypesProducts.UPDATE_PRODUCTS:
      return {
        ...state,
        data: state.data.map((product: any) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    default:
      return state;
  }
}