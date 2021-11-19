import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import'./nav.css';
import Menu from '../../components/Menu/Menu';

const Nav = () => {

    const [menuStatus, setMenuStatus] = useState(false);
    const toggleMenu = () => setMenuStatus(!menuStatus);
    const desktopView = window.matchMedia('(min-width: 1000px)');
    const tabletView = window.matchMedia('(min-width: 600px)');

    // console.log(mql)
    useEffect(() => {
        if (desktopView.matches || tabletView.matches){
            setMenuStatus(true);
        }
    })
    return (
       
        <nav className='nav-bar' onClick={toggleMenu}>
            {/* <img className= 'logo' src={logo} /> */}
            {!menuStatus && 
                <div className='hamburger-menu'>
                    <div className='nav-line'></div>
                    <div className='nav-line'></div>
                    <div className='nav-line'></div>
                </div> }
            { menuStatus && <Menu />}
        </nav>
        
    )
}

export default Nav;