import React, { useState } from "react";
import PropTypes from "prop-types";

const PageItem = ({ disabled, active, page, children, label, onClick }) =>
    <li className={"page-item" + (disabled ? " disabled" : "") + (active ? " active" : "")}>
        <a className="page-link" href={"#" + (page || children)} aria-label={label} onClick={() => onClick(page)}>
            {label ?
                <span aria-hidden="true">{children}</span>
                :
                children
            }
            {active &&
                <span className="sr-only">(current)</span>
            }
        </a>
    </li>



function Pagination(props) {
    let [currentPage, setCurrentPage] = useState(1);

    function getPagesCount() {
        let pages = Math.ceil(props.children.length / props.itemsPerPage) || 0;
        return pages;
    }

    if (props.children.length === 0) {
        return (
            <p>No urls yet</p>
        );
    }

    let start = props.itemsPerPage * (currentPage - 1);
    let filtered = props.children.slice(start, start + props.itemsPerPage);
    let view = React.cloneElement(props.container, null, filtered);

    let pageCount = getPagesCount();
    let buttonItems = Array.from(Array(pageCount).keys()).map(i => i + 1);
    let startIndex = Math.max(0, currentPage - Math.ceil(props.maxButtons / 2));
    let visibleButtons = Math.min(pageCount, props.maxButtons);
    let endIndex = startIndex + visibleButtons;
    if (endIndex > pageCount) {
        startIndex += pageCount - endIndex;
        endIndex = pageCount;
    }
    let buttonsToShow = buttonItems.slice(startIndex, endIndex);

    return (
        <div>
            {view}
            <nav aria-label="Urls navigation">
                <ul className="pagination justify-content-center mt-3">
                    <PageItem disabled={currentPage === 1} label="Previous" onClick={setCurrentPage} page={currentPage - 1}>&laquo;</PageItem>
                    {
                        buttonsToShow.map((i) =>
                            <PageItem key={i} active={i === currentPage} onClick={setCurrentPage} page={i}>{i}</PageItem>
                        )
                    }
                    <PageItem disabled={currentPage === getPagesCount()} label="Next" onClick={setCurrentPage} page={currentPage + 1}>&raquo;</PageItem>
                </ul>
            </nav>
        </div>

    );
}

Pagination.propTypes = {
    itemsPerPage: PropTypes.number,
    maxButtons: PropTypes.number,
    container: PropTypes.node,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

Pagination.defaultProps = {
    itemsPerPage: 5,
    maxButtons: 5

};

export default Pagination;