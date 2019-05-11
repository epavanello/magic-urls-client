import React from "react";
import { useSelector } from "react-redux";

import UrlListItem from "./UrlListItem";
import Pagination from "./Pagination";


const ListContainer = () => {
    const urls = useSelector(state => state.get("urls").get("items"))

    return (
        <Pagination itemsPerPage={5} maxButtons={5} container={<ul className="list-group my-5" />}>
            {urls.map(el => (
                <UrlListItem key={el.id} {...el} />
            ))}
        </Pagination>
    );
}
export default ListContainer;