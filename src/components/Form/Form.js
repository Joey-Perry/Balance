import React from 'react';
import useForm from '../../utils/useForm';
import './form.css';

const Form = ({toggleForm, fields}) => {
    const [values, handleChange] = useForm();

    const info = (e) => {
        e.preventDefault();
        console.log(values);
    }

    const formFields = fields.map(field => {
        console.log(field);

        return (
            <div>
            <label>{field}</label>
            <input value={values.field || ''} 
                    name='name'
                    onChange={handleChange}
                    placeholder='First Name'
                    />
            </div>
        )
    })
    
    // console.log(formFields);

    return (
        <>
        <form
            className='form'>
                {formFields.map(field => {
                    return (
                        <>{field}</>
                    )
                })}
            <button onClick={info}>SUBMIT</button>
            </form>
        
        <button onClick={toggleForm}>Close Form</button>

        </>
    )
}

export default Form;