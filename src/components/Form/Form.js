import axios from 'axios';
import React from 'react';
import useForm from '../../utils/useForm';
import './form.css';

const Form = ({toggleForm, fields, page }) => {
    const [values, handleChange] = useForm();

    const info = (e) => {
        e.preventDefault();
        // console.log(values);
        // console.log(page);
        
        axios.post(`/api/${page}`, values)
            .then(res => {
                console.log(res.data[0]);
                toggleForm();
            })
            .catch(err => console.log(err));
    }

    const formFields = fields.map((field, i) => {
        // console.log(field);
        return (
            <>
            <label>{field}</label>
            <input value={values.field}
                    name={field}
                    onChange={handleChange}
                    // placeholder='First Name'
                    />
            </>
        )
    })

    // console.log(formFields);

    return (
        <>
        <form
            className='form'>
                {formFields.map((field, i) => {
                    return (
                        <div key={i}>{field}</div>
                    )
                })}
            <button onClick={info}>SUBMIT</button>
            </form>
        
        <button onClick={toggleForm}>Close Form</button>

        </>
    )
}

export default Form;