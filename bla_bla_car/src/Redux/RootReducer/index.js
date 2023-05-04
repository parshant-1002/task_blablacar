import { combineReducers } from "redux";

import { registerReducer } from "../Reducer/registerReducer";
import { loaderStateReducer } from "../Reducer/loaderStateReducer";

const appReducer = combineReducers({
    registerReducer: registerReducer,
    loaderStateReducer:loaderStateReducer,
 
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;