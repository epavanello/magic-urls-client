import { ADD_TODO, FOUND_BAD_WORD } from "../constants/action-types";

export function addTodo(payload) {
    return { type: ADD_TODO, payload }
};

export function foundBadWord() {
    return { type: FOUND_BAD_WORD }
};

export function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            return { type: "DATA_LOADED", payload: json };
        });
};