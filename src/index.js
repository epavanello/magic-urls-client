import { ON_INIT } from "./constants/action-types";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from './containers/App';
import store from "./store";

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';


window.store = store;

store.dispatch({ type: ON_INIT });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


/*import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/