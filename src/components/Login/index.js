import React, { Component } from "react";

import IconInput from "../IconInput";

import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="container h-100">
                <div className="row  justify-content-center">
                <h1 className="title">Magic Urls</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 my-5 p-5 login-form">
                        <h3>Login</h3>
                        <form>
                            <IconInput label="Username" icon="fa fa-user" type="text" />
                            <IconInput label="Password" icon="fa fa-lock" type="password" />

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
                    <div className="col-md-6 my-5 p-5 signup-form">
                        <h3>Sign up</h3>
                        <form>
                            <IconInput label="Username" icon="fa fa-user" type="text" />
                            <IconInput label="Email" icon="fas fa-envelope" type="text" />
                            <IconInput label="Password" icon="fa fa-lock" type="password" />
                            <IconInput label="Conferma password" icon="fa fa-lock" type="password" />

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
export default Login;