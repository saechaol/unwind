import React from 'react';
import { NavLink } from 'react-router-dom';
import home from './home.svg';
import gift from './card_giftcard.svg';
import check from './check_box.svg';
import list from './list_alt.svg';
import settings from './settings.svg';
import './styles.css';


const NavBar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/home">
                <img src={home} alt="logo" className="logo"/>
            </NavLink>
            <NavLink to="/history">
                <img src={check} alt="logo" className="logo"/>
            </NavLink>
            <NavLink to="/rewards">
                <img src={gift} alt="logo" className="logo"/>
            </NavLink>
            <NavLink to="/transactions">
                <img src={list} alt="logo" className="logo"/>
            </NavLink>
            <NavLink to="/settings">
                <img src={settings} alt="logo" className="logoSettings"/>
            </NavLink>
        </div>
    );
};

export default NavBar;