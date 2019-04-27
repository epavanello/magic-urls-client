import { ADD_TODO, FOUND_BAD_WORD, DATA_LOADED, LOGIN_OK, LOGIN_FAIL } from "../constants/action-types"

import { fromJS } from 'immutable';

const initialState = fromJS({
    todos: [],
    remoteArticles: [],
    error: "",
    logged: false,
    login_failed: false
});

function rootReducer(state = initialState, action) {
    if (action.type === ADD_TODO) {
        return state
            .set("todos", state.get("todos").push(action.payload))
            .set("error", "");
    } else if (action.type === FOUND_BAD_WORD) {
        return state.set("error", "Todo contains bad words");
    } else if (action.type === DATA_LOADED) {
        return state.set("remoteArticles", action.payload);
    } else if (action.type === LOGIN_OK) {
        return state.set("logged", true)
            .set("login_failed", false);
    } else if (action.type === LOGIN_FAIL) {
        return state.set("login_failed", true);
    }
    return state;
}

export default rootReducer;