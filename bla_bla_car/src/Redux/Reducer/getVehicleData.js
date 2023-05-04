
import { ACTION_STATES } from "../ActionStates";
const initialStateForRegister = {
   
}
export const VehicleDataReducer = (state = initialStateForRegister, action) => {
    switch (action?.type) {
        case ACTION_STATES.GET_VEHICLE_DATA:
            return {
                ...state, ...action?.payload
            }
     
        default:
            return state
    }
}