import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        
        const userInfo = {
            firstName, lastName, username, email, password
        }
        
        axios.post('/auth/register', userInfo )
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    
    return (
        <section className='authentication'>
        <h1>Authentication 2</h1>

        <section className='signin'>

        <h2>Create your account</h2>

        <section className='login firstname'>
            <h5>First name</h5>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </section>

        <section className='login lastname'>
            <h5>Last name</h5>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </section>

        <section className='login username'>
        <h5>Username</h5>
        <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </section>

        <section className='login email'>
        <h5>Email</h5>
        <input value={email} onChange={(e) => setEmail(e.target.value)}/>
        </section>

        <section className='login password'>
        <h5>Password</h5>
        <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </section>

        <button className='btn' onClick={register}> Create my account </button>

        </section>

        <section className='register'>
            <p>Already have an account? <Link to='/'>Sign In</Link></p>
        </section>

        </section>
    )
}

export default Signup;