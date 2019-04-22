import React, { Component } from "react";
import PropTypes from 'prop-types';

class IconInput extends Component {
    render() {
        return (
            < div className = "form-group" >
                <div className="input-group input-group-lg">
                {   this.props.icon &&
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className={this.props.icon}></i></span>
                    </div>
                }
                    <input type={this.props.type} name={this.props.name} className="form-control" placeholder={this.props.label} />
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
  };

  IconInput.defaultProps = {
    type: "text"
};

export default IconInput;