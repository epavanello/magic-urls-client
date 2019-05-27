import { LOGIN_VERIFIED, LOGIN_START, LOGIN_OK, LOGIN_FAIL, LOGOUT, SIGNUP_OK, SIGNUP_FAIL } from "../constants/action-types"

import { fromJS } from 'immutable';

const authState = fromJS({
    verified: false,
    logged: false,
    token: "",
    login_failed: false,
    login_fail_message: "",
    signup_ok: false,
    signup_failed: false,
    signup_fail_message: "",
});

export default function(state = authState, action) {
    switch (action.type) {
        case LOGIN_VERIFIED:
            return state
                .set("verified", true);
        case LOGIN_START:
            return state
                .set("logged", false)
                .set("token", "")
                .set("login_failed", false)
                .set("login_fail_message", "");
        case LOGIN_OK:
            return state
                .set("logged", true)
                .set("token", action.payload);
        case LOGOUT:
            return state
                .set("logged", false)
                .set("token", "");
        case LOGIN_FAIL:
            return state
                .set("signup_ok", false)
                .set("login_failed", true)
                .set("login_fail_message", action.payload);
        case SIGNUP_OK:
            return state
                .set("signup_ok", true)
                .set("signup_failed", false)
                .set("signup_fail_message", "");
        case SIGNUP_FAIL:
            return state
                .set("signup_ok", false)
                .set("signup_failed", true)
                .set("signup_fail_message", action.payload);
        default:
            return state;
    }
}