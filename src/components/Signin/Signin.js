import React from 'react';
import './signin.css';

const Signin = () => {
    return (
        <>
        <h1>Authentication</h1>

        <section className='signin'>

        <h2>Sign in</h2>

        <section className='login username'>
            <input />
        </section>

        <section className='login password'>
            <input />
        </section>

        <button className='btn'> Sign In </button>

        </section>

        <section className='register'>
            <p>Don't have an account? Sign up</p>
        </section>

        </>
    )
}

export default Signin;