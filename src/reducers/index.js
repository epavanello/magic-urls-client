import { LOGIN_START, LOGIN_OK, LOGIN_FAIL, ADD_URL, LOGOUT, ERROR_URL, URLS_READY } from "../constants/action-types"

import { fromJS } from 'immutable';

const initialState = fromJS({
    urls: [],
    error: "",
    logged: false,
    token: "",
    login_failed: false,
    login_fail_message: ""
});

function rootReducer(state = initialState, action) {
    if (action.type === LOGIN_START) {
        return state
            .set("logged", false)
            .set("token", "")
            .set("login_failed", false)
            .set("login_fail_message", "");
    } else if (action.type === LOGIN_OK) {
        return state
            .set("logged", true)
            .set("token", action.payload);
    } else if (action.type === LOGOUT) {
        return state
            .set("logged", false)
            .set("token", "");
    } else if (action.type === LOGIN_FAIL) {
        return state
            .set("login_failed", true)
            .set("login_fail_message", action.payload);
    } else if (action.type === ADD_URL) {
        return state.updateIn(["urls"], urls => urls.concat([action.payload]));
    } else if (action.type === ERROR_URL) {
        return state
            .set("error", action.payload);
    } else if (action.type === URLS_READY) {
        return state
            .set("urls", action.payload);
    }
    return state;
}

export default rootReducer;