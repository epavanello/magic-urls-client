import { LOGIN_START, LOGIN_OK, LOGIN_FAIL, LOGOUT, SIGNUP_OK, SIGNUP_FAIL } from "../constants/action-types";

import config from '../config';

import { firebase } from '../firebase';

export const login = payload => dispatch => {
	dispatch({ type: LOGIN_START });

	return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(function(error) {
		dispatch({ type: LOGIN_FAIL, payload: error.message });
		console.log(error);
	});
}

export const signup = payload => dispatch => {

	return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user_data => {
		dispatch({ type: SIGNUP_OK });
	});



	return fetch(config.api.uri + "auth/signup", {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ...payload })
	})
		.then(response => {
			if (response.ok) {
				return response.json().then(json => {
					dispatch({ type: SIGNUP_OK });
					return json;
				});
			} else {
				return response.json().then(json => {
					throw new Error(json.message);
				});
			}
		}).catch(e => {
			dispatch({ type: SIGNUP_FAIL, payload: e.message });
		});
}

export const checkToken = token => dispatch => {
	dispatch({ type: LOGIN_OK, payload: token });
	/*
	return firebase.auth().signInWithCustomToken(token).then(user_data => {
		user_data.user.getIdToken().then(token => dispatch({ type: LOGIN_OK, payload: token }))
	}).catch(function(error) {
		// An error happened.
		console.log(error);
	});*/
}

export const logout = payload => dispatch => {
	return firebase.auth().signOut().then(function() {
		dispatch({ type: LOGOUT });
	}).catch(function(error) {
		// An error happened.
		console.log(error);
	});
}