import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/authReducer';
import './menu.css';

const Menu = (props) => {
    console.log(props);

    const logout = () => {
        props.logoutUser();
    }

    return (
        <div className='menu'>
            <ul>

            <li><h2><Link to='/'>Dash</Link></h2></li>
            <li><h2><Link to='/account-details'>Account Details</Link></h2></li>
            <li><h2><Link to='/budgets'>Budget</Link></h2></li>
            <li><h2><Link to='/transactions'>Transactions</Link></h2></li>
            <li><h2 onClick={logout} className='log-out'>Log-out</h2></li>

            </ul>

        </div>
    )
}

const mapDispatchToProps = (reduxState) => {
    return {
        state: reduxState
    }
}

export default connect(mapDispatchToProps, {logoutUser})(Menu);