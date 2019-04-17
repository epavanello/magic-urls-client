import { ADD_TODO, FOUND_BAD_WORD } from "../constants/action-types"

const initialState = {
    todos: [],
    error: ""
}

function rootReducer(state = initialState, action) {
    if(action.type == ADD_TODO) {
        return Object.assign({}, state, {
            todos: state.todos.concat(action.payload),
            error: ""
        });
    } else if(action.type == FOUND_BAD_WORD) {
        return Object.assign({}, state, {
            error: "Todo contains bad words"
        });
    }
    return state;
}

export default rootReducer;