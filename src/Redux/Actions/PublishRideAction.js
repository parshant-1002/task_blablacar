import { ACTION_STATES } from "../ActionStates"

export const setPickLocation = (payload) => {
 
    return {
      type: ACTION_STATES.SET_PICK_LOCATION,
      payload
     
    }
  }
  export const setDropLocation = (payload) => {
  
    return {
      type: ACTION_STATES.SET_DROP_LOCATION,
      payload
     
    }
  }
  export const setSelectedRouteData = (payload) => {
  
    return {
      type: ACTION_STATES.SETSELECTED_ROUTE_DATA,
      payload
     
    }
  }
  export const addRideDate = (payload) => {
  
    return {
      type: ACTION_STATES.ADD_RIDE_DATE,
      payload
     
    }
  }
  export const addRideTime = (payload) => {
  
    return {
      type: ACTION_STATES.ADD_RIDE_TIME,
      payload
     
    }
  }