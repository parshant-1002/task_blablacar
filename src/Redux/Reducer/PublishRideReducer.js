import { ACTION_STATES } from "../ActionStates"

const initialStateForPublishRide = {
    pickUpLocation: {},
    dropOfLocation: {},
}
export const publishRideReducer = (state = initialStateForPublishRide, action) => {
    switch (action?.type) {
        case ACTION_STATES.SET_PICK_LOCATION:
            return {
                ...state, pickUpLocation: action?.payload
            }
        case ACTION_STATES.SET_DROP_LOCATION:
            return {
                ...state, dropOfLocation: action?.payload
            }
        default:
            return state
    }
}