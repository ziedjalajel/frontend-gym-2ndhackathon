import { combineReducers } from "redux";
import gymReducer from "./gymReducer";
import classReducer from "./classReducer";
import authReducer from "./authReducer";
import typeReducer from "./typeReducer";

const rootReducer = combineReducers({
  gyms: gymReducer,
  classes: classReducer,
  auth: authReducer,
  types: typeReducer,
});

export default rootReducer;
