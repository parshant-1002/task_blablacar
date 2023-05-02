import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { ACTION_STATES } from "../ActionStates";
import { BASE_URL, URL_EXTENSIONS } from "../../Services/Api/Constants";
import { LOCALSTORAGE_KEY_NAME } from "../../Shared/Constants";
import { currentUserUpdate } from "../Actions";
import { setResetPasswordToken } from "../Reducer";
import Loader from "../../Components/Atoms/Loader";

function* postRegisterData(payload) {
    try {
        const res = yield axios.post(BASE_URL + URL_EXTENSIONS.SIGN_UP, { user: payload?.payload });
        localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.headers?.authorization))
        yield put(currentUserUpdate(res?.data?.status?.data))
    } catch (error) {

        console.log(error, "errorInRegister")
    }
}

function* postLoginData(payload) {
    try {
        const res = yield axios.post(
            BASE_URL + URL_EXTENSIONS.SIGN_IN, { user: payload?.payload }
        );
        localStorage.setItem(LOCALSTORAGE_KEY_NAME, (res?.headers?.authorization))
    } catch (error) {
        console.log(error, "errorInLogin")
    }
}

function* sendPasswordResetMailData(payload) {
    try {

        const res = yield axios.post(
            BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, { user: payload?.payload }
        );


    } catch (error) {

        console.log(error, "errorInLogin")
    }
}
function* sendResetPassword(payload) {
    try {
        const res = yield axios.put(
            BASE_URL + URL_EXTENSIONS.FORGET_PASSWORD, { user: payload?.payload }
        );


    } catch (error) {
        console.log(error, "errorInLogin")
    }
}

function* Saga() {
    yield all([
        takeLatest(ACTION_STATES.SIGN_UP, postRegisterData),
        takeLatest(ACTION_STATES.SIGN_IN, postLoginData),
        takeLatest(ACTION_STATES.SEND_FORGET_PASSWORD_MAIL, sendPasswordResetMailData),
        takeLatest(ACTION_STATES.SEND_RESET_PASSWORD, sendResetPassword)
    ]);
}
export default Saga;