import { LOGIN_START, LOGIN_OK, LOGIN_FAIL, LOGOUT } from "../constants/action-types";


export const login = payload => dispatch => {
	dispatch({ type: LOGIN_START });
	return fetch("http://localhost:8000/api/auth/login", {
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

export const checkToken = token => dispatch => {
	return fetch("http://localhost:8000/api/users/me", {
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