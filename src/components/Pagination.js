import React, { Component } from "react";
import PropTypes from "prop-types";

const PageItem = props =>
    <li className={"page-item" + (props.disabled ? " disabled" : "") + (props.active ? " active" : "")}>
        <a className="page-link" href={"#" + (props.page || props.children)} aria-label={props.label} onClick={() => props.onClick(props.page)}>
            {props.label ?
                <span aria-hidden="true">{props.children}</span>
                :
                props.children
            }
            {props.active &&
                <span className="sr-only">(current)</span>
            }
        </a>
    </li>

class Pagination extends Component {
    constructor() {
        super();

        this.state = {
            currentPage: 1
        };
    }
    getPagesCount = () => {
        let pages = Math.ceil(this.props.children.length / this.props.itemsPerPage) || 0;
        return pages;
    };
    goToPage = (page) => {
        this.setState({ currentPage: page });
    };
    render() {
        let children = this.props.children;
        let start = this.props.itemsPerPage * (this.state.currentPage - 1);
        let filtered = children.slice(start, start + this.props.itemsPerPage);
        let view = React.cloneElement(this.props.container, null, filtered);

        let pageCount = this.getPagesCount();
        let buttonItems = Array.from(Array(pageCount).keys()).map(i => i + 1);
        let startIndex = Math.max(0, this.state.currentPage - Math.ceil(this.props.maxButtons / 2));
        let visibleButtons = Math.min(pageCount, this.props.maxButtons);
        let endIndex = startIndex + visibleButtons;
        if (endIndex > pageCount) {
            startIndex += pageCount - endIndex;
            endIndex = pageCount;
        }
        let buttonsToShow = buttonItems.slice(startIndex, endIndex);

        return (
            <div>
                {view}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <PageItem disabled={this.state.currentPage === 1} label="Previous" onClick={this.goToPage} page={this.state.currentPage - 1}>&laquo;</PageItem>
                        {
                            buttonsToShow.map((i) =>
                                <PageItem key={i} active={i === this.state.currentPage} onClick={this.goToPage} page={i}>{i}</PageItem>
                            )
                        }
                        <PageItem disabled={this.state.currentPage === this.getPagesCount()} label="Next" onClick={this.goToPage} page={this.state.currentPage + 1}>&raquo;</PageItem>
                    </ul>
                </nav>
            </div>

        );
    }
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