import { combineReducers } from "redux";
import authentication from "./authentication";
import navGuestControl from "./navGuestControl";

const rootReducer = combineReducers({
  authentication,
  navGuestControl
});

export default rootReducer;
