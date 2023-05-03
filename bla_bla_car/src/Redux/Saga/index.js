import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { ACTION_STATES } from "../ActionStates";
import { BASE_URL, URL_EXTENSIONS } from "../../Services/Api/Constants";
import { LOCALSTORAGE_KEY_NAME } from "../../Shared/Constants";
import { currentUserUpdate, settingLoaderState } from "../Actions";


function* postRegisterData(payload) {

    try {
        yield put(settingLoaderState(true))
        const res = yield axios.post(BASE_URL + URL_EXTENSIONS.SIGN_UP, { user: payload?.payload });
        localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.headers?.authorization))
        localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
       
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
        localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.headers?.authorization))
        localStorage.setItem("CurrentUser",JSON.stringify(res?.data?.status?.data))
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
        console.log(error, "errorInLogin")
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
        console.log(error, "errorInLogin")
    }
}
// function* uploadingPic(payload) {
//     try {
//         yield put(settingLoaderState(true))
//         const res = yield axios.post(
//             BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, { user: payload?.payload }
//         );

//         yield put(settingLoaderState(false))
//     } catch (error) {
//         yield put(settingLoaderState(false))
//         console.log(error, "errorInLogin")
//     }
// }
function* updateProfileData(payload) {
    // try {
    //     yield put(settingLoaderState(true))
    //     const res = yield axios.post(
    //         BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, { user: payload?.payload }
    //     );

    //     yield put(settingLoaderState(false))
    // } catch (error) {
    //     yield put(settingLoaderState(false))
    //     console.log(error, "errorInLogin")
    // }
}


function* Saga() {
    yield all([
        takeLatest(ACTION_STATES.SIGN_UP, postRegisterData),
        takeLatest(ACTION_STATES.SIGN_IN, postLoginData),
        takeLatest(ACTION_STATES.SEND_FORGET_PASSWORD_MAIL, sendPasswordResetMailData),
        takeLatest(ACTION_STATES.SEND_RESET_PASSWORD, sendResetPassword),
        takeLatest(ACTION_STATES.UPDATE_PROFILE, updateProfileData)
    ]);
}
export default Saga;