import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <ul>

            <li><h2><Link to='/'>Dash</Link></h2></li>
            <li><h2><Link to='/budgets'>Budget</Link></h2></li>
            <li><h2><Link to='/transactions'>Transactions</Link></h2></li>
            <li><h2>Log-out</h2></li>

            </ul>

        </div>
    )
}

export default Menu;