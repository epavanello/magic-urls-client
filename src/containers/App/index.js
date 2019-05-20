import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { onInit } from '../../actions/authActions';

import Login from "../../containers/Login";
import Home from "../../containers/Home";
import Profile from "../Profile";
import Header from "../../components/Header";

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
			<>
			</>
		);
	} else {
		return (
			<div className="container">
				<Router>
					<Header></Header>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/home" component={Home} />
					<Route path="/profile" component={Profile} />
				</Router>
			</div>
		);
	}
};

const App = () => {
	return (
		<CheckLogin />
	);
}
export default App;