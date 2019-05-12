import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'

import IconInput from "../../components/IconInput";
import { login, signup } from "../../actions/authActions";


const Login = (props) => {
    let [loginEmail, setLoginEmail] = useState('');
    let [loginPassword, setLoginPassword] = useState('');

    let [singupUsername, setSingUpUsername] = useState('');
    let [singupEmail, setSingUpEmail] = useState('');
    let [singupPassword, setSingUpPassword] = useState('');
    let [singupCPassword, setSingUpCPassword] = useState('');

    const logged = useSelector(state => state.get("auth").get("logged"));
    const login_failed = useSelector(state => state.get("auth").get("login_failed"));
    const login_fail_message = useSelector(state => state.get("auth").get("login_fail_message"));

    const dispatch = useDispatch();

    function handleLoginSubmit(event) {
        event.preventDefault();
        dispatch(login({ email: loginEmail, password: loginPassword }));
    }

    function handleSignupSubmit(event) {
        event.preventDefault();
        dispatch(signup({ username: singupUsername, email: singupEmail, password: singupPassword, cpassword: singupCPassword }));
    }

    if (logged) {
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
                        onSubmit={handleLoginSubmit}>
                        <IconInput label="Email" icon="fa fa-user" type="text" name="email" required={true} autofocus={true}
                            value={loginEmail} onChange={(name, value) => setLoginEmail(value)} />
                        <IconInput label="Password" icon="fa fa-lock" type="password" name="password" required={true}
                            value={loginPassword} onChange={(name, value) => setLoginPassword(value)} />
                        {login_failed &&
                            <p className="text-center"><em>{login_fail_message}</em></p>
                        }
                        <div className="form-group text-center">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        <p className="text-center">
                            <small id="emailHelp" className="form-text text-muted">Or login with</small>
                        </p>
                        <div className="row">
                            <div className="d-flex w-100 justify-content-between align-items-center">
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
                    <form className="mt-5"
                        onSubmit={handleSignupSubmit}>
                        <IconInput label="Username" icon="fa fa-user fa-fw" type="text" required={true}
                            value={singupUsername} onChange={(name, value) => setSingUpUsername(value)} />
                        <IconInput label="Email" icon="fas fa-envelope fa-fw" type="email" required={true}
                            value={singupEmail} onChange={(name, value) => setSingUpEmail(value)} />
                        <IconInput label="Password" icon="fa fa-lock fa-fw" type="password" required={true}
                            value={singupPassword} onChange={(name, value) => setSingUpPassword(value)} />
                        <IconInput label="Conferma password" icon="fa fa-lock fa-fw" type="password" required={true}
                            value={singupCPassword} onChange={(name, value) => setSingUpCPassword(value)} />

                        <div className="form-group text-center">
                            <input type="submit" className="btn btn-primary" value="Sign up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;