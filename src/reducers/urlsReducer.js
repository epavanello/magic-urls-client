import { ADD_URL, URL_POST_ERROR, URL_LIST_ERROR, URLS_READY, URL_DELETED } from "../constants/action-types"

import { fromJS } from 'immutable';

const urlsState = fromJS({
    items: [],
    list_error: "",
    post_error: ""
});

export default function(state = urlsState, action) {
    switch (action.type) {
        case ADD_URL:
            return state.set("error", "")
                .updateIn(["items"], items => items.concat([action.payload]));
        case URL_DELETED:
            return state.updateIn(['items'], urls =>
                urls.filter(url => url.id !== action.payload)
            );
        case URL_LIST_ERROR:
            return state.set("list_error", action.payload);
        case URL_POST_ERROR:
            return state.set("post_error", action.payload);
        case URLS_READY:
            return state.set("items", action.payload);
        default:
            return state;
    }
}