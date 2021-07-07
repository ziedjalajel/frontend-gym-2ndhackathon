import * as actionTypes from "../actions/types";

const initialState = {
  types: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TYPE:
      const { newType } = action.payload;
      return {
        ...state,
        types: [...state.types, newType],
      };

    case actionTypes.FETCH_TYPES:
      return {
        ...state,
        types: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
