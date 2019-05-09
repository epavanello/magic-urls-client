import React from "react";

const UrlListItem = props =>
    <li className="list-group-item" key={props.id}>
        <div className="text-monospace text-truncate">{props.address}</div>
        <span className="font-italic">{props.alias}</span>
    </li>

export default UrlListItem;