import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../media/unwind_icon.png';
import './styles.css';


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