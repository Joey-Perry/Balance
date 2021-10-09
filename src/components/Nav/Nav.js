import React from 'react';
import logo from '../../logo.svg';
import'./nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav-bar'>
            <img className= 'logo' src={logo} />
            <h1>NAV</h1>
            <h2><Link to='/'>Dash</Link></h2>
            <h2><Link to='/budgets'>Budget</Link></h2>
            <h2><Link to='/transactions'>Transactions</Link></h2>
            <h2>Log-out</h2>
        </nav>
    )
}

export default Nav;