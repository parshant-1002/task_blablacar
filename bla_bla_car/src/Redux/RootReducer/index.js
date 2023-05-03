import { combineReducers } from "redux";
import { currenytUserReducer, loaderStateReducer, registerReducer} from "../Reducer";

const appReducer = combineReducers({
    registerReducer: registerReducer,
    currenytUserReducer:currenytUserReducer,
    loaderStateReducer:loaderStateReducer,
 
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;