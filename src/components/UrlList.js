import React from "react";

const UrlList = props =>
    <ul className="list-group list-group-flush my-5">
        {props.urls.constructor === Array && props.urls.map(el => (
            <li className="list-group-item" key={el.id}>
                <div className="text-monospace text-truncate">{el.address}</div>
                <span className="font-italic">{el.alias}</span>
            </li>
        ))
        }
    </ul>

export default UrlList;