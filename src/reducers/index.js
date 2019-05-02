import { ADD_TODO, FOUND_BAD_WORD, DATA_LOADED, LOGIN_START, LOGIN_OK, LOGIN_FAIL, ADD_URL } from "../constants/action-types"

import { fromJS } from 'immutable';

const initialState = fromJS({
    todos: [],
    urls: [],
    remoteArticles: [],
    error: "",
    logged: false,
    token: "",
    login_failed: false,
    login_fail_message: ""
});

function rootReducer(state = initialState, action) {
    if (action.type === ADD_TODO) {
        return state
            .set("todos", state.get("todos").push(action.payload))
            .set("error", "");
    } else if (action.type === FOUND_BAD_WORD) {
        return state
            .set("error", "Todo contains bad words");
    } else if (action.type === DATA_LOADED) {
        return state
            .set("remoteArticles", action.payload);
    } else if (action.type === LOGIN_START) {
        return state
            .set("logged", false)
            .set("token", "")
            .set("login_failed", false)
            .set("login_fail_message", "");
    } else if (action.type === LOGIN_OK) {
        return state
            .set("logged", true)
            .set("token", action.payload.token);
    } else if (action.type === LOGIN_FAIL) {
        return state
            .set("login_failed", true)
            .set("login_fail_message", action.payload);
    } else if (action.type === ADD_URL) {
        return state
            .set("urls", state.get("urls").push(action.payload));
    }
    return state;
}

export default rootReducer;