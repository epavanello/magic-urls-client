import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../actions/authActions';

const Header = () => {
    const logged = useSelector(state => state.get("auth").get("logged"));

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    let menu;
    if (logged) {
        menu = <div className="user-photo-container">
            <div className="user-photo">
                <i className="fas fa-user"></i>
            </div>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="Menu">
                <Link className="dropdown-item" to="/home">Home</Link>
                <Link className="dropdown-item" to="/profile">Profile</Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div>
        </div>;
    }

    return (
        <div className="row justify-content-center header">
            <h1 className="site-title">Magic Urls</h1>
            {logged && menu}
        </div>
    );
}

export default Header