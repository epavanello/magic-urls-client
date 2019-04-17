import { ADD_TODO, FOUND_BAD_WORD, DATA_LOADED } from "../constants/action-types"

import { fromJS } from 'immutable';

const initialState = fromJS({
    todos: [],
    remoteArticles: [],
    error: ""
});

function rootReducer(state = initialState, action) {
    if(action.type == ADD_TODO) {
        return state
        .set("todos", state.get("todos").push(action.payload))
        .set("error", "");
    } else if(action.type == FOUND_BAD_WORD) {
        return state.set("error", "Todo contains bad words");
    } else if(action.type == DATA_LOADED) {
        return state.set("remoteArticles", action.payload);
    }
    return state;
}

export default rootReducer;