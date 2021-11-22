import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useForm from '../../utils/useForm';
import './editAccountDetailsForm.css';

const EditAccountDetailsForm = ({toggleForm, account, page, setValues }) => {
    const [ values, handleChange ] = useForm(account);
    const [ selectedType, setSelectedType ] = useState(account.type);
    
    // console.log(category);
    console.log(page);
    
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

    const setType = (e) => {
        setSelectedType(selectedType);
        handleChange(e.target.value);
    }

    return (
        <>
            <form className='form'>


                <label>Type: </label>
                {/* <input value={values.type}
                    name='type'
                    onChange={handleChange} /> */}
                <select value={selectedType} onChange={setType} name='type'>
                    <option selected>Select One</option>
                    <option value='checking'>Checking</option>
                    <option value='savings'>Savings</option>
                    <option value='debt'>Debt</option>
                </select>

                <label>Name: </label>
                <input value={values.name}
                    name='name'
                    onChange={handleChange} />

                <label>Notes: </label>
                <input value={values.notes}
                    name='notes'
                    onChange={handleChange} />

                <label>Amount: </label>
                <input value={values.amount}
                    name='amount'
                    onChange={handleChange} />

                <button onClick={info}>SUBMIT</button>
            </form>

            <button onClick={deleteThis}>DELETE</button>
            <button onClick={toggleForm}>CLOSE</button>
        </>
    )

}

export default EditAccountDetailsForm;