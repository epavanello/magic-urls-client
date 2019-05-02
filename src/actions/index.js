import { ADD_TODO, FOUND_BAD_WORD, DATA_LOADED, LOGIN_START, LOGIN_OK, LOGIN_FAIL, ADD_URL } from "../constants/action-types";

export function addTodo(payload) {
	return { type: ADD_TODO, payload }
};

export function addUrl(payload) {
	return { type: ADD_URL, payload }
};

export function foundBadWord() {
	return { type: FOUND_BAD_WORD }
};

export function getData() {
	return function (dispatch) {
		return fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(json => {
				dispatch({ type: DATA_LOADED, payload: json });
			});
	};
}

export function login(payload) {
	return function (dispatch) {
		dispatch({ type: LOGIN_START });
		return fetch("http://localhost:8000/login", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: payload.email, password: payload.password })
		})
			.then(response => response.json())
			.then(json => {
				if (json.success) {
					dispatch({ type: LOGIN_OK, payload: json });
				} else {
					dispatch({ type: LOGIN_FAIL, payload: json.message });
				}
			}).catch(e => {
				console.log(e);
				dispatch({ type: LOGIN_FAIL, payload: e.message });
			});
	};
}

export function loginFake() {
	return function (dispatch) {
		dispatch({ type: LOGIN_OK });
	};
}

