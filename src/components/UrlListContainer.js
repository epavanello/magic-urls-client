import React from "react";
import { connect } from "react-redux";

import UrlListItem from "./UrlListItem";
import Pagination from "./Pagination";

const mapStateToProps = state => {
    // Move to selectors.js and use rselect for performance (cache)
    return { urls: state.get("urls").get("items") };
}

const ConnectedUrlListContainer = ({ urls }) => (
    <Pagination itemsPerPage={5} maxButtons={5} container={<ul className="list-group list-group-flush my-5" />}>
        {urls.map(el => (
            <UrlListItem key={el.id} address={el.address} alias={el.alias} />
        ))}
    </Pagination>
);

const UrlListContainer = connect(mapStateToProps)(ConnectedUrlListContainer);

export default UrlListContainer;