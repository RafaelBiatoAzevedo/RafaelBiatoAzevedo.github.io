import { requestCategories, requestProducts } from "../service/requestApi";

export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_GREETING = 'SAVE_GREETING';
export const SAVE_CATEGORY = 'SAVE_CATEGORY';
export const SAVE_PRODUCTS = ' SAVE_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const saveCategory = (category) => ({
  type: SAVE_CATEGORY,
  category,
});

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});

export const saveGreeting = (greeting) => ({
  type: SAVE_GREETING,
  greeting,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
});

export const categoriesThunk = () => (dispatch) => {
  requestCategories().then((response) => dispatch(saveCategories(response)));
}

export const getProductsByCategory = (category) => (dispatch) => {
  dispatch(saveCategory(category));
  requestProducts(category).then((response) => dispatch(saveProducts(response)));
}
