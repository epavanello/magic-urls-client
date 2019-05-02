import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    // Move to selectors.js and use rselect for performance (cache)
    return { urls: state.get("urls") };
}
/*
class ConnectedList extends React.Component {
    render() {
        let { urls } = this.props;
        // Render the content into a list item
        return (
            <ul className="list-group list-group-flush">
                {urls.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))
                }
            </ul>
        );
    }
}
//*/
//* OR
const ConnectedList = ({ urls }) => (
    <div>
        <ul className="list-group list-group-flush my-5">
            {urls.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.url}
                </li>
            ))
            }
        </ul>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="/" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="/">1</a></li>
                <li className="page-item"><a className="page-link" href="/">2</a></li>
                <li className="page-item"><a className="page-link" href="/">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
);
//*/

const List = connect(mapStateToProps)(ConnectedList);

export default List;