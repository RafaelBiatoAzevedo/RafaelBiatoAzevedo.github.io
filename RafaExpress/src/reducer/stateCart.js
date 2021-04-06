import { ADD_PRODUCT_CART } from "../action";

const INITIAL_STATE = {
  products: [],  
}

const stateCart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return { products: [...state.products, action.product] };
    default:
      return state;
  }
}

export default stateCart;
