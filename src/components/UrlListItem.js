import React from "react";

const UrlListItem = props =>
    <li className="list-group-item list-group-item-action flex-column align-items-start" key={props.id}>
        <div className="d-flex w-100 justify-content-end align-items-center">
            <button type="button" className="btn btn-primary btn-sm" title="Copy"><i class="far fa-copy"></i></button>
            <span className="ml-1 font-weight-bold flex-fill">{props.alias}</span>
            <span>4 views <i className="far fa-eye"></i></span>
        </div>
        <a href={props.address} target="_blank" rel="noopener noreferrer" className="font-italic text-monospace text-truncate">{props.address}</a>

    </li>

export default UrlListItem;