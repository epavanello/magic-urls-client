import { Map } from 'immutable';
import {
    combineReducers
} from 'redux-immutable';

import authReducer from './authReducer';
import urlsReducer from './urlsReducer';

const initialState = Map();

const rootReducer = combineReducers({
    urls: urlsReducer,
    auth: authReducer,
});

export default {
    rootReducer,
    initialState
}