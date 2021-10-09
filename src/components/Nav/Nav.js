import React, { useState } from 'react';
import logo from '../../logo.svg';
import'./nav.css';
import Menu from '../../components/Menu/Menu';

const Nav = () => {

    const [menuStatus, setMenuStatus] = useState(false);
    const toggleMenu = () => setMenuStatus(!menuStatus);

    return (
        <nav className='nav-bar' onClick={toggleMenu}>
            <img className= 'logo' src={logo} />
            {!menuStatus && <h1>NAV</h1> }
            { menuStatus && <Menu />}
        </nav>
    )
}

export default Nav;