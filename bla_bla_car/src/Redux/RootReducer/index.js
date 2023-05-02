import { combineReducers } from "redux";
import { currenytUserReducer, registerReducer, setResetPasswordToken } from "../Reducer";

const appReducer = combineReducers({
    registerReducer: registerReducer,
    currenytUserReducer:currenytUserReducer,
   
 
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;