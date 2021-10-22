import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

const Signin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const login = () => {
        console.log({username}, {password});
        axios.post('/auth/login', {username, password})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
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

export default Signin;