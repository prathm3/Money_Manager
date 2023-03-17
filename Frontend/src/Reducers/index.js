import { combineReducers } from "redux";
import recordReducer from "./recordReducer.js";
import profileReducer from "./profileReducer.js";
import expenseReducer from "./expenseReducer.js";
import userReducer from "./userReducer.js";
export default combineReducers({
  recordReducer,
  profileReducer,
  expenseReducer,
  userReducer,
});
