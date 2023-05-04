import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { ACTION_STATES } from "../ActionStates";
import { BASE_URL, URL_EXTENSIONS } from "../../Services/Api/Constants";
import { LOCALSTORAGE_KEY_NAME } from "../../Shared/Constants";
import {  getVehicleData, savingProfilePic, settingLoaderState } from "../Actions";


function* postRegisterData(payload) {

    try {
        yield put(settingLoaderState(true))
        const res = yield axios.post(BASE_URL + URL_EXTENSIONS.SIGN_UP, { user: payload?.payload });
        if(res){

            localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.headers?.authorization))
            localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
        }
       
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "errorInRegister")
    }
}

function* postLoginData(payload) {
    try {
      
        yield put(settingLoaderState(true))
        const res = yield axios.post(
            BASE_URL + URL_EXTENSIONS.SIGN_IN, { user: payload?.payload }
        );
        if(res){

            localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.headers?.authorization))
            localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
        }
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "errorInLogin")
    }
}

function* sendPasswordResetMailData(payload) {
    try {
        yield put(settingLoaderState(true))
        const res = yield axios.post(
            BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, { user: payload?.payload }
        );
        yield put(settingLoaderState(false))

    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in sending mail")
    }
}
function* sendResetPassword(payload) {
    try {
        
        yield put(settingLoaderState(true))
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, { user: payload?.payload }
        );

        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in reseting password")
    }
}
function* uploadingPic(payload) {
    try {
        const token =localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
          };
        console.log(payload?.payload,"imageinsaga")
        yield put(settingLoaderState(true))
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.PROFILE_PIC,  payload?.payload ,config
        );

        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in uploading pic")
    }
}

function* gettingProfilePic() {
    try {
        const token =localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
          };
        console.log("get image called")
          yield put(settingLoaderState(true))
        
          const res = yield axios.get(
              BASE_URL + URL_EXTENSIONS.PROFILE_PIC ,config
              );
              console.log(res,"imageinsaga")
              yield put(savingProfilePic(res?.data?.data?.image_url))  
        yield put(settingLoaderState(false))
    } catch (error) {
        
        yield put(settingLoaderState(false))
        console.log(error, "error in getting pic")
    }
}



function* updateProfileData(payload) {
    try {
        const token =localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
          };
        yield put(settingLoaderState(true))
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.SIGN_UP, { user: payload?.payload },config
        );
        console.log(res?.data?.status?.data,"profileUpdated")
        // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "errorInLogin")
    }
}

function* updateBioData(payload) {
    try {
        const token =localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
          };
        yield put(settingLoaderState(true))
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.SIGN_UP, { user: payload?.payload },config
        );
        console.log(res?.data?.status?.data,"bioUpdated")
        // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "errorInLogin")
    }
}



function* addVehicle(payload) {
    try {
        const token =localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
          };
        yield put(settingLoaderState(true))
        const res = yield axios.post(
            BASE_URL + URL_EXTENSIONS.VEHICLE, { vehicle: payload?.payload },config
        );
        console.log(res?.data?.status?.data,"vehicleData")
        // localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in adding vehicle")
    }
}
function* getVehicle(payload) {
    try {
        const token =localStorage.getItem("token")
        const config = {
            headers: { 'Authorization': token }
          };
        yield put(settingLoaderState(true))
        const res = yield axios.get(
            BASE_URL + URL_EXTENSIONS.VEHICLE,config
        );
        console.log(res?.data?.status?.data,"vehicleData")
    yield put(getVehicleData(res))
        yield put(settingLoaderState(false))
    } catch (error) {
        yield put(settingLoaderState(false))
        console.log(error, "error in adding vehicle")
    }
}

function* Saga() {
    yield all([
        takeLatest(ACTION_STATES.SIGN_UP, postRegisterData),
        takeLatest(ACTION_STATES.SIGN_IN, postLoginData),
        takeLatest(ACTION_STATES.SEND_FORGET_PASSWORD_MAIL, sendPasswordResetMailData),
        takeLatest(ACTION_STATES.SEND_RESET_PASSWORD, sendResetPassword),
        takeLatest(ACTION_STATES.UPDATE_PROFILE, updateProfileData),
        takeLatest(ACTION_STATES.ADDING_MINI_BIO, updateBioData),
        takeLatest(ACTION_STATES.UPLOADING_PROFILE_PIC,uploadingPic),
        takeLatest(ACTION_STATES.GETTING_PROFILE_PIC,gettingProfilePic),
        takeLatest(ACTION_STATES.ADD_VEHICLE_DATA,addVehicle),
        takeLatest(ACTION_STATES.GET_VEHICLE_DATA,getVehicle)
    ]);
}
export default Saga;