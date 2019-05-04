import React, { Component } from "react";
import PropTypes from "prop-types";



class Pagination extends Component {

    getPagesCount = () => {
        console.log(this.props.items);
        console.log(this.props.itemsPerPage);

        return (this.props.items / this.props.itemsPerPage) || 0;
    };

    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {
                        [...Array(this.getPagesCount())].map((e, i) => <li className="page-item" key={i}><a className="page-link" href="/">{i + 1}</a></li>)
                    }
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}



Pagination.propTypes = {
    items: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number
};

Pagination.defaultProps = {
    itemsPerPage: 1
};

export default Pagination;