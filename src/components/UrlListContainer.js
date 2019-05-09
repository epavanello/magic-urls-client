import React from "react";
import { connect } from "react-redux";

import UrlListItem from "./UrlListItem";
import Pagination from "./Pagination";

const mapStateToProps = state => {
    // Move to selectors.js and use rselect for performance (cache)
    return { urls: state.get("urls").get("items") };
}

const ConnectedUrlListContainer = ({ urls }) => (
    <div>
        <ul className="list-group list-group-flush my-5">
            <Pagination itemsPerPage={2}>
                {urls.map(el => (
                    <UrlListItem key={el.id} address={el.address} alias={el.alias} />
                ))}
            </Pagination>
        </ul>
    </div>
);

const UrlListContainer = connect(mapStateToProps)(ConnectedUrlListContainer);

export default UrlListContainer;