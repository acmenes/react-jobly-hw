import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./NavBar.css"

function NavBar () {
    return (
        <nav className="navbar">
            <BrowserRouter>
                <NavLink exact to="/">
                    Jobly
                </NavLink>
                <NavLink exact to="/login">
                    Login
                </NavLink>
                <NavLink exact to="/signup">
                    Sign Up
                </NavLink>
                <NavLink exact to="/jobs">
                    Find Jobs
                </NavLink>
                <NavLink exact to="/companies">
                    Browse Companies
                </NavLink>
                <NavLink exact to="/profile">
                    Your Profile
                </NavLink>
            </BrowserRouter>
        </nav>
    )
};

export default NavBar;