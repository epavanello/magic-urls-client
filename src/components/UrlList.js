import React from "react";
import UrlListItem from "./UrlListItem";

const UrlList = props =>
    <ul className="list-group list-group-flush my-5">
        {props.urls.constructor === Array && props.urls.map(el => (
            <UrlListItem key={el.id} address={el.address} alias={el.alias} />
        ))
        }
    </ul>

export default UrlList;