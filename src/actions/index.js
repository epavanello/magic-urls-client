import { ADD_TODO, FOUND_BAD_WORD, DATA_LOADED, LOGIN_START, LOGIN_OK, LOGIN_FAIL, LOGOUT, ADD_URL, ERROR_URL, URLS_READY } from "../constants/action-types";

export function addTodo(payload) {
	return { type: ADD_TODO, payload }
};

export function addUrl(payload) {
	return function(dispatch, getState) {
		return fetch("http://localhost:8000/api/urls/", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': getState().get("token")
			},
			body: JSON.stringify(payload)
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
				dispatch({ type: ADD_URL, payload: json });
			}).catch(e => {
				dispatch({ type: ERROR_URL, payload: e.message });
			});
	};
};

export function loadUrls() {
	return function(dispatch, getState) {
		return fetch("http://localhost:8000/api/urls/", {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': getState().get("token")
			}
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
				dispatch({ type: URLS_READY, payload: json });
			}).catch(e => {
				dispatch({ type: ERROR_URL, payload: e.message });
			});
	};
};



export function foundBadWord() {
	return { type: FOUND_BAD_WORD }
};

export function getData() {
	return function(dispatch) {
		return fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(json => {
				dispatch({ type: DATA_LOADED, payload: json });
			});
	};
}

export function login(payload) {
	return function(dispatch) {
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
	};
}


export function checkToken(token) {
	return function(dispatch) {
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
	};
};

export function logout() {
	return { type: LOGOUT }
}

export function loginFake() {
	return function(dispatch) {
		dispatch({ type: LOGIN_OK });
	};
}

