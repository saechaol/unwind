import React from 'react';
import { NavLink, BrowserRouter, Switch, Route} from "react-router-dom";

import logo from './unwind_icon.png';
import './Nav.css';


const NavBar = () => {
    return (
        
        <div className="sidebar">
            <NavLink to="/">
                <img src={logo} alt="logo" className="logo"/>
            </NavLink>
            <NavLink to="/">
                <img src={logo} alt="logo" className="logo"/>
            </NavLink>
            <NavLink to="/">
                <img src={logo} alt="logo" className="logo"/>
            </NavLink>
        </div>
    );
};

export default NavBar;