import React, { Component } from "react";
import PropTypes from 'prop-types';

class IconInput extends Component {

    onFieldChange(event) {
        if (this.props.onChange) {
            // for a regular input field, read field name and value from the event
            const fieldName = event.target.name;
            const fieldValue = event.target.value;
            this.props.onChange(fieldName, fieldValue);
        }
    }

    render() {
        return (
            < div className="form-group" >
                <div className="input-group input-group-lg">
                    {this.props.icon &&
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className={this.props.icon}></i></span>
                        </div>
                    }
                    <input
                        type={this.props.type}
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.label}
                        onChange={this.onFieldChange.bind(this)}
                        required={this.props.required}
                        autoFocus={this.props.autofocus}
                    />
                </div>
            </div >
        );
    }
}

IconInput.propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    autofocus: PropTypes.bool,
};

IconInput.defaultProps = {
    type: "text"
};

export default IconInput;