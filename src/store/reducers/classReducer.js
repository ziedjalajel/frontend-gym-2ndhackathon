import {
  ADD_CLASS,
  // DELETE_PRODUCT,
  FETCH_CLASSES,
} from "../actions/classActions";

const initialState = {
  classes: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASS:
      const { newClass } = action.payload;

      //we dont need any more because the backend will provide us these two
      // newProduct.slug = slugify(newProduct.name, { lower: true });
      // newProduct.id = state.products[state.products.length - 1].id + 1;

      return {
        ...state,
        classes: [...state.classes, newClass],
      };

    // case DELETE_PRODUCT:
    //   return {
    //     ...state,
    //     products: state.products.filter(
    //       (product) => product.id !== action.payload.productId
    //     ),
    //   };

    case FETCH_CLASSES:
      return {
        ...state,
        classes: action.payload,
        // loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
