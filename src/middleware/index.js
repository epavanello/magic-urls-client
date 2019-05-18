import { LOGIN_OK, LOGOUT } from "../constants/action-types";

export const manageToken = () => next => action => {
    if (action.type === LOGIN_OK) {
        localStorage.setItem('TOKEN', action.payload);
    } else if (action.type === LOGOUT) {
        localStorage.setItem('TOKEN', "");
    }
    return next(action);
}