import React from 'react';
import logo from '../../logo.svg';
import'./nav.css';

const Nav = () => {
    return (
        <nav className='nav-bar'>
        <img className= 'logo' src={logo} />
        <h1>NAV</h1>
        </nav>
    )
}

export default Nav;