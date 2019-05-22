import React from "react";
import { useDispatch } from "react-redux";
import { deleteUrl } from "../actions/urlsActions";

import config from '../config';

const UrlListItem = (props) => {
    const dispatch = useDispatch();

    function handleDeleteClicl() {
        dispatch(deleteUrl(props.id));
    }

    function copyUrl() {
        var inp = document.createElement('input');
        document.body.appendChild(inp);
        inp.value = config.shortner.uri + props.alias;
        inp.select();
        document.execCommand('copy', false);
        inp.remove();
    }

    return (
        <li className="list-group-item flex-column align-items-start" key={props.id}>

            <div className="d-flex w-100 justify-content-between align-items-center">
                <span className="font-weight-bold alias-url flex-fill">{props.alias} <i className="far fa-copy copy-icon" title="Copy" onClick={copyUrl}></i></span>
                <button type="button" className="close" aria-label="Close" onClick={handleDeleteClicl}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center">
                <small><a href={props.address} target="_blank" rel="noopener noreferrer" className="font-italic text-monospace text-truncate">{props.address}</a></small>
                <small>{props.views} views <i className="far fa-eye"></i></small>
            </div>
        </li>
    );
}

export default UrlListItem;