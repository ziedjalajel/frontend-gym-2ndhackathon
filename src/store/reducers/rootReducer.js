import { combineReducers } from "redux";
import gymReducer from "./gymReducer";
import classReducer from "./classReducer";
import authReducer from "./authReducer";
import typeReducer from "./typeReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  gyms: gymReducer,
  classes: classReducer,
  auth: authReducer,
  types: typeReducer,
  sessions: sessionReducer,
});

export default rootReducer;
