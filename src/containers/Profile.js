import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';

import IconInput from "../components/IconInput";

const Profile = () => {
    let [username, setUpUsername] = useState('');
    let [email, setUpEmail] = useState('');
    let [password, setUpPassword] = useState('');
    let [cPassword, setUpCPassword] = useState('');


    let [profileError, setProfileError] = useState('');
    let [profileMessage, setProfileMessage] = useState('');

    const logged = useSelector(state => state.get("auth").get("logged"));
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        /*dispatch(updateProfile({ address, alias })).then((json) => {
            if (json) {
                setAddress('');
                setAlias('');
            }
        });*/
    }

    if (!logged) {
        return <Redirect to="/login" />
    }

    return (
        <div className="row  justify-content-center">
            <div className="col-md-6 p-5 my-profile">
                <h3 className="title text-center">Profile</h3>
                <form className="mt-5"
                    onSubmit={handleSubmit}>
                    <IconInput label="Username" icon="fa fa-user fa-fw" type="text" required={true}
                        value={username} onChange={(name, value) => setUpUsername(value)} />
                    <IconInput label="Email" icon="fas fa-envelope fa-fw" type="email" required={true}
                        value={email} onChange={(name, value) => setUpEmail(value)} />
                    <IconInput label="Password" icon="fa fa-lock fa-fw" type="password" required={true}
                        value={password} onChange={(name, value) => setUpPassword(value)} />
                    <IconInput label="Conferma password" icon="fa fa-lock fa-fw" type="password" required={true}
                        value={cPassword} onChange={(name, value) => setUpCPassword(value)} />
                    {profileError &&
                        <div className="alert alert-warning" role="alert">
                            {profileError}
                        </div>
                    }
                    {profileMessage &&
                        <div className="alert alert-primary" role="alert">
                            {profileMessage}
                        </div>
                    }
                    <div className="form-group text-center">
                        <input type="submit" className="btn btn-primary" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;