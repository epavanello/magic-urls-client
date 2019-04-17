import { ADD_TODO } from "../constants/action-types";

import { foundBadWord } from "../actions";

const forbiddenWords = ["anything", "sleep"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
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