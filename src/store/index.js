import { createStore, applyMiddleware, compose } from "redux";

import reducers from "../reducers";
import { manageToken } from "../middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [manageToken, thunk];

const store = createStore(
    reducers.rootReducer,
    reducers.initialState,
    storeEnhancers(applyMiddleware(...middlewares))
);

export default store;