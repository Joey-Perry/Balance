import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/authReducer';

const Signin = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const login = () => {
        const loginInfo = { username, password }
        props.loginUser(loginInfo);
    }

    const demoLogin = () => {
        const username = 'Demo Account';
        const password = '1234';
        const loginInfo = { username, password }
        props.loginUser(loginInfo);
    }

    return (
        <section className='authentication'>
        <h1>Balance App</h1>

        <section className='signin'>

            <h2>Sign in</h2>

            <section className='login username'>
                <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </section>

            <section className='login password'>
                <input value={password} type='password' onChange={(e) => setPassword(e.target.value)}/>
            </section>

            <button className='btn' onClick={login}> Sign In </button>
            <button className='btn' onClick={demoLogin}> DEMO </button>

        </section>

        <section className='register'>
            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
        </section>

        </section>
    )
}

const mapStateToProps = (reduxState) => {
    return {
      state: reduxState.state
    }
  }
  
  const mapDispatchToProps = { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(Signin);