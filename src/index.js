import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import App from './components/App';

import { Provider } from "react-redux";



import store from "./store";
import { addTodo } from "./actions";

window.store = store;
window.addTodo = addTodo;

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