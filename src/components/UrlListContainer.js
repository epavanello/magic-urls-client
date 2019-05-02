import React from "react";
import { connect } from "react-redux";

import UrlList from "./UrlList";

const mapStateToProps = state => {
    // Move to selectors.js and use rselect for performance (cache)
    return { urls: state.get("urls") };
}

const ConnectedUrlListContainer = ({ urls }) => (
    <div>
        <UrlList urls={urls}></UrlList>

        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="/" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="/">1</a></li>
                <li className="page-item"><a className="page-link" href="/">2</a></li>
                <li className="page-item"><a className="page-link" href="/">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
);

const UrlListContainer = connect(mapStateToProps)(ConnectedUrlListContainer);

export default UrlListContainer;