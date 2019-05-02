import { ADD_TODO, ON_INIT, LOGIN_OK, LOGOUT } from "../constants/action-types";

import { foundBadWord, checkToken } from "../actions";

const forbiddenWords = ["anything", "sleep"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            // do your stuff
            if (action.type === ADD_TODO) {
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );

                if (foundWord.length) {
                    return dispatch(foundBadWord());
                }
            }
            return next(action);
        };
    };
}


export function manageToken({ dispatch }) {
    return function(next) {
        return function(action) {
            // do your stuff
            if (action.type === ON_INIT) {
                let token = localStorage.getItem('TOKEN');
                if (token) {
                    dispatch(checkToken(token));
                }
            } else if (action.type === LOGIN_OK) {
                localStorage.setItem('TOKEN', action.payload);
            } else if (action.type === LOGOUT) {
                localStorage.setItem('TOKEN', "");
            }
            return next(action);
        };
    };
}