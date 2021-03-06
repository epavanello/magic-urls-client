import { ADD_URL, URL_LIST_ERROR, URL_POST_ERROR, URLS_READY, URL_DELETED } from "../constants/action-types";

import config from '../config';

export const addUrl = payload => async (dispatch, getState) => {
	try {
		const response = await fetch(config.api.uri + "urls/", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': getState().get("auth").get("token")
			},
			body: JSON.stringify(payload)
		});
		const json = await response.json();
		if (!response.ok) {
			throw new Error(json.message);
		}
		dispatch({ type: ADD_URL, payload: json });
		return json;
	}
	catch (e) {
		dispatch({ type: URL_POST_ERROR, payload: e.message });
	}
}

export const loadUrls = () => (dispatch, getState) => {
	return fetch(config.api.uri + "urls", {
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
			// Convert to json to get error
			return response.json().then(json => {
				throw new Error(json.message);
			});
		})
		.then(json => {
			dispatch({ type: URLS_READY, payload: json });
		}).catch(e => {
			dispatch({ type: URL_LIST_ERROR, payload: e.message });
		});
}


export const deleteUrl = (id) => (dispatch, getState) => {
	return fetch(config.api.uri + "urls/" + id, {
		method: "DELETE",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': getState().get("auth").get("token")
		}
	})
		.then(response => {
			if (response.ok) {
				dispatch({ type: URL_DELETED, payload: id });
			} else {
				// Convert to json to get error
				return response.json().then(json => {
					throw new Error(json.message);
				});
			}
		})
		.then(json => {
			dispatch({ type: URL_DELETED, payload: id });
		}).catch(e => {
			dispatch({ type: URL_LIST_ERROR, payload: e.message });
		});
}

