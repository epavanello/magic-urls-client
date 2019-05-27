import React from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from "../../containers/Login";
import Home from "../../containers/Home";
import Profile from "../Profile";
import Header from "../../components/Header";

import './App.scss';


const CheckLogin = () => {
	const verified = useSelector(state => state.get("auth").get("verified"));

	if (!verified) {
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
				<span className="WIP" onClick={() => alert('The trees that are slow to grow bear the best fruit.')}>Work in progrss</span>
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