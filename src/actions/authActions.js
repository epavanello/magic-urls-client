import { LOGIN_START, LOGIN_OK, LOGIN_FAIL, LOGOUT, SIGNUP_OK, SIGNUP_FAIL } from "../constants/action-types";

import config from '../config';

export const onInit = () => dispatch => new Promise((resolve, reject) => {
	let token = localStorage.getItem('TOKEN');
	if (token) {
		dispatch(checkToken(token))
			.then(() => resolve())
			.catch(() => reject());
	} else {
		resolve();
	}
});

export const login = payload => dispatch => {
	dispatch({ type: LOGIN_START });
	return fetch(config.api.uri + "login", {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username: payload.email, password: payload.password })
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			return response.json().then(json => {
				throw new Error(json.message);
			});
		})
		.then(json => {
			dispatch({ type: LOGIN_OK, payload: json.token });
		}).catch(e => {
			dispatch({ type: LOGIN_FAIL, payload: e.message });
		});
}

export const signup = payload => dispatch => {
	return fetch(config.api.uri + "signup", {
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
	return fetch(config.api.uri + "users/me", {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
		.then(response => response.json())
		.then(json => {
			dispatch({ type: LOGIN_OK, payload: token });
		}).catch(e => {
		});
}

export function logout() {
	return { type: LOGOUT }
}