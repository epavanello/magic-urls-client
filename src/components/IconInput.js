import React, { Component } from "react";

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
                    <input type={this.props.type || "text"} className="form-control" placeholder={this.props.label} />
                </div>
        </div >
     );
    }
}
export default IconInput;