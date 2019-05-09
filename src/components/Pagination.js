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
    getLastPage = () => {
        return 1;
    };
    goToPage = (page) => {
        this.setState({ currentPage: page });
    };
    render() {
        let children = this.props.children;
        let start = this.props.itemsPerPage * (this.state.currentPage - 1);
        let filtered = children.slice(start, start + this.props.itemsPerPage);
        return (
            <div>
                {filtered}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <PageItem disabled={this.state.currentPage == 1} label="Previous">&laquo;</PageItem>
                        {
                            [...Array(this.getPagesCount())].map((e, i) =>
                                <PageItem key={i} active={i + 1 === this.state.currentPage} onClick={this.goToPage} page={i + 1}>{i + 1}</PageItem>
                            )
                        }
                        <PageItem disabled={false} label="Next" onClick={this.goToPage} page={this.getLastPage()}>&raquo;</PageItem>
                    </ul>
                </nav>
            </div>

        );
    }
}


Pagination.propTypes = {
    itemsPerPage: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

Pagination.defaultProps = {
    itemsPerPage: 5
};

export default Pagination;