import axios from 'axios';
import React from 'react';
import useForm from '../../utils/useForm';
import './editForm.css';

const EditForm = ({toggleForm, category, page }) => {
    const [ values, handleChange ] = useForm();
    
    console.log(category);
    
    const info = (e) => {
        e.preventDefault();

        console.log(values);

        // axios.put(`/api/${page}`, values)
        //     .then(res => {
        //         console.log(res.data)
        //         toggleForm();
        //     })
        //     .catch(err => console.log(err));
    }

    const field = category[0];

    return (
        <>
            <form className='form'>


                <label>Name: </label>
                <input value={field.name}
                    name='name'
                    onChange={handleChange} />

                <label>Expected: </label>
                <input value={field.expected}
                    name='expected'
                    onChange={handleChange} />

                <label>Date</label>
                <input value={field.date}
                    name='date'
                    onChange={handleChange} />

                <button onClick={info}>SUBMIT</button>
            </form>

            <button onClick={toggleForm}>CLOSE</button>
        </>
    )

}

export default EditForm;