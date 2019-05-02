import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTodo } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    };
}

const mapStateToProps = state => {
    // Move to selectors.js and use rselect for performance (cache)
    return { error: state.get("error") };
}

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addTodo({ title, id });
        this.setState({ title: "" });
    }
    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Url</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">SAVE</button>
                <p>{this.props.error}</p>
            </form>
        );
    }
}
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default Form;