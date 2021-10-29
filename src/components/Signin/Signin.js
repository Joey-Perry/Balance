import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducer';

const Signin = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const login = () => {
        // console.log({username}, {password});
        // axios.post('/auth/login', {username, password})
        //     .then(res => console.log(res.data))
        //     .catch(err => console.log(err));
        const loginInfo = { username, password }
        props.loginUser(loginInfo);
    }

    return (
        <>
        <h1>Authentication</h1>

        <section className='signin'>

            <h2>Sign in</h2>

            <section className='login username'>
                <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </section>

            <section className='login password'>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </section>

            <button className='btn' onClick={login}> Sign In </button>

        </section>

        <section className='register'>
            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
        </section>

        </>
    )
}

const mapStateToProps = (reduxState) => {
    return {
      state: reduxState.state
    }
  }
  
  const mapDispatchToProps = { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(Signin);