import { ADD_URL, ERROR_URL, URLS_READY } from "../constants/action-types"

import { fromJS } from 'immutable';

const urlsState = fromJS({
    items: [],
    error: ""
});

export default function(state = urlsState, action) {
    switch (action.type) {
        case ADD_URL:
            return state.updateIn(["items"], items => items.concat([action.payload]));
        case ERROR_URL:
            return state.set("error", action.payload);
        case URLS_READY:
            return state.set("items", action.payload);
        default:
            return state;
    }
}