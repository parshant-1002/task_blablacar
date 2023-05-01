import { ACTION_STATES } from "../ActionStates"

export const registerData={
  email:(payload)=>{
    return{
        type:ACTION_STATES?.ADD_EMAIL,
        payload
    }
  },
  password:(payload)=>{
    return{
        type:ACTION_STATES?.ADD_PASSWORD,
        payload
    }
  },
  nameTitle:(payload)=>{
    return{
        type:ACTION_STATES?.ADD_TITLE,
        payload
    }
  },
  date:(payload)=>{
    return{
        type:ACTION_STATES?.ADD_DATE,
        payload
    }
  },
  firstName:(payload)=>{
    return{
        type:ACTION_STATES?.ADD_FIRSTNAME,
        payload
    }
  },
  lastName:(payload)=>{
    return{
        type:ACTION_STATES?.ADD_LASTNAME,
        payload
    }
  },
  signup:(payload)=>{
    return{
        type:ACTION_STATES?.SIGN_UP,
        payload
    }
  }
}

export const loginData={
    signin:(payload)=>{
        return{
            type:ACTION_STATES?.SIGN_IN,
            payload
        }
      }
}