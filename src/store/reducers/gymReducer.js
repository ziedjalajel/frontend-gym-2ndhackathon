import * as actionTypes from "../actions/types";

const initialState = {
  gyms: [],
  loading: true,
  // isAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GYM:
      const { newGym } = action.payload;
      return {
        ...state,
        gyms: [...state.gyms, newGym],
        // isAdmin: true,
      };

    case actionTypes.FETCH_GYMS:
      return {
        ...state,
        gyms: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
