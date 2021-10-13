import React from 'react';
import './signup.css';

const Signup = () => {
    return (
        <>
        <h1>Authentication 2</h1>

        <section className='signin'>

        <h2>Create your account</h2>

        <section className='login fullname'>
            <input />
        </section>

        <section className='login username'>
            <input />
        </section>

        <section className='login email'>
            <input />
        </section>

        <section className='login password'>
            <input />
        </section>

        <button className='btn'> Create my account </button>

        </section>

        <section className='register'>
            <p>Already have an account? Sign In</p>
        </section>

        </>
    )
}

export default Signup;