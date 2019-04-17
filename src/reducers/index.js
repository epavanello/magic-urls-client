import { ADD_TODO, FOUND_BAD_WORD } from "../constants/action-types"

import { fromJS } from 'immutable';

const initialState = fromJS({
    todos: [],
    error: ""
});

function rootReducer(state = initialState, action) {
    if(action.type == ADD_TODO) {
        return state
        .set("todos", state.get("todos").push(action.payload))
        .set("error", "");
    } else if(action.type == FOUND_BAD_WORD) {
        return state.set("error", "Todo contains bad words");
    }
    return state;
}

export default rootReducer;