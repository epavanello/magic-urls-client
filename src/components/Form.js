import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";

import IconInput from "./IconInput";
import { addUrl } from "../actions";


function mapDispatchToProps(dispatch) {
    return {
        addUrl: todo => dispatch(addUrl(todo))
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
            url: "",
            alias: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(fieldName, fieldValue) {
        this.setState({ [fieldName]: fieldValue });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { url, alias } = this.state;
        const id = uuidv1();
        this.props.addUrl({ url, alias, id });
        this.setState({ url: "", alias: "" });
    }
    render() {
        const { url, alias } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="mt-5">
                <IconInput label="Url" icon="fas fa-globe-europe" type="text" name="url" value={url} onChange={this.handleChange} required={true} autofocus={true} />
                <IconInput label="Alias" icon="fas fa-bolt" type="text" name="alias" value={alias} onChange={this.handleChange} required={false} />
                <div className="form-group text-center">
                    <input type="submit" className="btn btn-primary" value="Create" />
                </div>
                <p>{this.props.error}</p>
            </form>
        );
    }
}
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default Form;