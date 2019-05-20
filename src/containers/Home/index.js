import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';

import UrlListContainer from "../../components/UrlListContainer";
import Form from "../../components/Form";

import { loadUrls } from '../../actions/urlsActions';

function Home() {
	const logged = useSelector(state => state.get("auth").get("logged"));
	const list_error = useSelector(state => state.get("urls").get("list_error"));
	const dispatch = useDispatch();

	useEffect(() => {
		if (logged) {
			dispatch(loadUrls());
		}
	}, []);

	if (!logged) {
		return <Redirect to="/login" />
	}
	return (
		<div className="row align-items-start">
			<div className="col-md-6 p-5 my-card order-2 order-md-1">
				<h3 className="title text-center">Urls</h3>
				<UrlListContainer />
				{list_error &&
					<div className="alert alert-warning" role="alert">
						{list_error}
					</div>
				}
			</div>
			<div className="col-md-6 p-5 my-card dark order-1 order-md-2">
				<h3 className="title text-center">add Url</h3>
				<Form />
			</div>
		</div>
	);
}

export default Home;