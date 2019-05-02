import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

import IconInput from "../../components/IconInput";
import { login, loginFake } from "../../actions";

function mapDispatchToProps(dispatch) {
    return {
        login: credentials => dispatch(login(credentials)),
        loginFake: p => dispatch(loginFake())
    };
}

const mapStateToProps = state => {
    // Move to selectors.js and use rselect for performance (cache)
    return { logged: state.get("logged") };
}

class ConnectedLogin extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = { email: '', password: '' };

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        this.props.loginFake();
        //this.props.login({ email: this.state.email, password: this.state.password });
        //this.setState({ title: "" });
    }

    render() {
        if (this.props.logged) {
            return <Redirect to="/home" />;
        }
        return (
            <div className="container h-100">
                <div className="row justify-content-center">
                    <h1 className="site-title">Magic Urls</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 p-5 my-card">
                        <h3 className="title text-center">Login</h3>
                        <form className="mt-5"
                            action={this.props.action}
                            method={this.props.method}
                            onSubmit={this.handleLoginSubmit}>
                            <IconInput label="Email" icon="fa fa-user" type="text" name="email" onChange={this.onChange} required={true} autofocus={true} />
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
                    <div className="col-md-6 p-5 my-card dark">
                        <h3 className="title text-center">Sign up</h3>
                        <form className="mt-5">
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

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);
export default Login;