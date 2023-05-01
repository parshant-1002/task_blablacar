import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { ACTION_STATES } from "../ActionStates";

function* postRegisterData(payload) {
    try {
        console.log(payload, "fghsdfg")
        yield axios.post(
            "https://7f3c-112-196-113-2.ngrok-free.app/users", { user: payload?.payload }
        );
    } catch (error) {
        alert(error)
    }
}

function* postLoginData(payload) {
    try {
        const res = yield axios.post(
            "https://039f-112-196-113-2.ngrok-free.app/users/sign_in", { user: payload?.payload }
        );
        
        localStorage.setItem("token", (res?.headers?.authorization))
    } catch (error) {
        alert(error)
    }
}
function* Saga() {
    yield all([
        takeLatest(ACTION_STATES?.SIGN_UP, postRegisterData),
        takeLatest(ACTION_STATES?.SIGN_IN, postLoginData)
    ]);
}
export default Saga;