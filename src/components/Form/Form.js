import React from 'react';
import useForm from '../../utils/useForm';
import './form.css';

const Form = (props) => {
    const [values, handleChange] = useForm();

    return (
        <form
            onSubmit={}
            className='form'>
                <label>Name:</label>
                <input
                    value={values.name || ''}
                    onChange={(e) => handleChange}
                    type='text'
                    placeholder='First Name'
                    className='name' />
            </form>
    )
}

export default Form;