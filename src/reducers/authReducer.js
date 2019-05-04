import { LOGIN_START, LOGIN_OK, LOGIN_FAIL, LOGOUT } from "../constants/action-types"

import { fromJS } from 'immutable';

const authState = fromJS({
    logged: false,
    token: "",
    login_failed: false,
    login_fail_message: ""
});

export default function(state = authState, action) {
    switch (action.type) {
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
                .set("login_failed", true)
                .set("login_fail_message", action.payload);
        default:
            return state;
    }
}