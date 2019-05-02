import React from "react";

const UrlList = props =>
    <ul className="list-group list-group-flush my-5">
        {props.urls.constructor === Array && props.urls.map(el => (
            <li className="list-group-item" key={el.id}>{el.alias} - {el.address}</li>
        ))
        }
    </ul>

export default UrlList;