import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    // Move to selectors.js and use rselect for performance (cache)
    return { todos: state.get("todos") };
}
/*
class ConnectedList extends React.Component {
    render() {
        let { todos } = this.props;
        // Render the content into a list item
        return (
            <ul className="list-group list-group-flush">
                {todos.map(el => (
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
const ConnectedList = ({ todos }) => (
    <ul className="list-group list-group-flush">
        {todos.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))
        }
    </ul>
);
//*/



const List = connect(mapStateToProps)(ConnectedList);

export default List;