import { ADD_SESSION, FETCH_SESSIONS } from "../actions/sessionActions";

const initialState = {
  sessions: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SESSION:
      const { newSession } = action.payload;
      return {
        ...state,
        sessions: [...state.sessions, newSession],
      };
    case FETCH_SESSIONS:
      return {
        ...state,
        sessions: action.payload,
        //   loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
