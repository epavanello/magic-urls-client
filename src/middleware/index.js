import { ON_INIT, LOGIN_OK, LOGOUT } from "../constants/action-types";

import { checkToken } from "../actions";


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