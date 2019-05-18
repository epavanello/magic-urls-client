import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { onInit } from '../../actions/authActions';

import Login from "../../containers/Login";
import Home from "../../containers/Home";

import './App.scss';

const CheckLogin = () => {
	const [ready, setReady] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {

		dispatch(onInit()).then(() => {
			setReady(true);
		});
	}, []);

	if (!ready) {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<h1 className="site-title">Magic Urls</h1>
				</div>
			</div>
		);
	} else {
		return (
			<Router>
				<Route path="/login" exact component={Login} />
				<Route path="/home" component={Home} />
			</Router>
		);
	}
};

const App = () => {
	return (
		<CheckLogin />
	);
}
export default App;