import React from "react";
import { connect } from "react-redux";

import UrlList from "./UrlList";
import Pagination from "./Pagination";

const mapStateToProps = state => {
    // Move to selectors.js and use rselect for performance (cache)
    return { urls: state.get("urls").get("items") };
}

const ConnectedUrlListContainer = ({ urls }) => (
    <div>
        <UrlList urls={urls}></UrlList>

        <Pagination items={urls.length || 0} />
    </div>
);

const UrlListContainer = connect(mapStateToProps)(ConnectedUrlListContainer);

export default UrlListContainer;