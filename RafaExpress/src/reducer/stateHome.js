import { SAVE_CATEGORIES, SAVE_CATEGORY, SAVE_GREETING, SAVE_PRODUCTS } from '../action';

const INICIAL_STATE = {
  greeting: 'Boa Tarde',
  category: '',
  products: [],
  categories: [],
};

export const stateHome = ( state = INICIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return { ...state, products: [...action.products] };
    case SAVE_CATEGORIES:
      return { ...state, categories: [...action.categories] };
    case SAVE_CATEGORY:
      return { ...state, category: action.category };
    case SAVE_GREETING:
      return { ...state, greeting: action.greeting }
    default:
      return state;
  }
}
