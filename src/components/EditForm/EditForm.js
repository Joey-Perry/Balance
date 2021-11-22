import axios from 'axios';
import React, { useEffect } from 'react';
import useForm from '../../utils/useForm';
import './editForm.css';

const EditForm = ({toggleForm, category, page, setValues }) => {
    const [ values, handleChange ] = useForm(category[0]);
    
    // console.log(category);
    // console.log(page);
    
    const info = (e) => {
        e.preventDefault();

        // console.log(values);

        axios.put(`/api${page}`, values)
            .then(res => {
                console.log(res.data)
                toggleForm();
                setValues(res.data);
            })
            .catch(err => console.log(err));
    }

    const deleteThis = () => {
        // console.log(values);

        axios.delete(`/api/${page}/${values.id}`)
            .then(res => {
                toggleForm();
                setValues(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <form className='form'>


                <label>Name: </label>
                <input value={values.name}
                    name='name'
                    onChange={handleChange} />

                <label>Expected: </label>
                <input value={values.expected}
                    name='expected'
                    onChange={handleChange} />

                <label>Date</label>
                <input value={values.date}
                    name='date'
                    onChange={handleChange} />

                <button onClick={info}>SUBMIT</button>
            </form>

            <button onClick={deleteThis}>DELETE</button>
            <button onClick={toggleForm}>CLOSE</button>
        </>
    )

}

export default EditForm;