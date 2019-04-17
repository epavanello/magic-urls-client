import { ADD_TODO, FOUND_BAD_WORD } from "../constants/action-types";

export function addTodo(payload) {
    return { type: ADD_TODO, payload }
};

export function foundBadWord() {
    return { type: FOUND_BAD_WORD }
};