import React, { Component } from "react";

import IconInput from "../IconInput";

import './Login.scss';

class Login extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = { errors: '' };

        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    onLoginSubmit(e) {
        e.preventDefault();

        fetch(this.props.loginAction, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(this.state)
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                if(response.ok) {
                     
                } else {
                    
                }
              }
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container h-100">
                <div className="row  justify-content-center">
                    <h1 className="title">Magic Urls</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 p-5 login-form">
                        <h3>Login</h3>
                        <form
                            action={this.props.action}
                            method={this.props.method}
                            onSubmit={this.onLoginSubmit}>
                            <IconInput label="Username" icon="fa fa-user" type="text" name="username" onChange={this.onChange} required={true} autofocus={true} />
                            <IconInput label="Password" icon="fa fa-lock" type="password" name="password" onChange={this.onChange} required={true} />

                            <div className="form-group text-center">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                            <p className="text-center">
                                <small id="emailHelp" className="form-text text-muted">Or login with</small>
                            </p>
                            <div align="center">
                                <div className="row">
                                    <div className="col-md-6 text-right">
                                        <button type="button" className="btn btn-light btn-sm">
                                            <i className="fab fa-facebook-square"></i> Facebook
                                    </button>
                                    </div>
                                    <div className="col-md-6 text-left">
                                        <button type="button" className="btn btn-light btn-sm">
                                            <i className="fab fa-google"></i> Google
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 p-5 signup-form">
                        <h3>Sign up</h3>
                        <form>
                            <IconInput label="Username" icon="fa fa-user" type="text" required={true} />
                            <IconInput label="Email" icon="fas fa-envelope" type="email" required={true} />
                            <IconInput label="Password" icon="fa fa-lock" type="password" required={true} />
                            <IconInput label="Conferma password" icon="fa fa-lock" type="password" required={true} />

                            <div className="form-group text-center">
                                <input type="submit" className="btn btn-primary" value="Sign up" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// App.propTypes = { action: React.PropTypes.string.isRequired, method: React.PropTypes.string}
Login.defaultProps = {
    loginAction: 'http://localhost:5000/api/login'
};


export default Login;