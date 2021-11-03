import axios from 'axios';
import React from 'react';
import useForm from '../../utils/useForm';
import './form.css';

const Form = ({toggleForm, fields, page, push}) => {
    const [values, handleChange] = useForm();

    const info = (e) => {
        e.preventDefault();
        // console.log(values);
        // console.log(page);
        

        axios.post(`/api/${page}`, values)
            .then(res => {
                console.log(res.data[0]);
                // console.log(props.history);
                push(`${page}`);
            })
            .catch(err => console.log(err));
    }

    const formFields = fields.map(field => {
        // console.log(field);

        return (
            <div>
            <label>{field}</label>
            <input value={values.field}
                    name={field}
                    onChange={handleChange}
                    // placeholder='First Name'
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