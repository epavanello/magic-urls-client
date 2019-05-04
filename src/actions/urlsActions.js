import { ADD_URL, ERROR_URL, URLS_READY } from "../constants/action-types";

export const addUrl = payload => (dispatch, getState) => {
	return fetch("http://localhost:8000/api/urls/", {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': getState().get("auth").get("token")
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
}

export const loadUrls = () => (dispatch, getState) => {
	return fetch("http://localhost:8000/api/urls/", {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': getState().get("auth").get("token")
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
}

