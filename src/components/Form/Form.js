import React from 'react';
import useForm from '../../utils/useForm';
import './form.css';

const Form = ({toggleForm}) => {
    const [values, handleChange] = useForm();

    const info = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <>
        <form
            className='form'>
                <label>Name:</label>
                <input
                    value={values.name || ""}
                    name='name'
                    onChange={handleChange}
                    type='text'
                    placeholder='First Name'
                    className='name' />
            <button onClick={info}>SUBMIT</button>
            </form>
        
        <button onClick={toggleForm}>Close Form</button>

        </>
    )
}

export default Form;