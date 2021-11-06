import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useForm from '../../utils/useForm';
import './form.css';

const Form = ({toggleForm, fields, page, setValues }) => {
    const [values, handleChange] = useForm();
    const [ categories, setCategories ] = useState([]);
    const [ selectedCategory, setSelectedCategory ] = useState('Select one');

    const info = (e) => {
        e.preventDefault();
        console.log(values);
        if (values.category === 'Select One'){
            alert('Please select a Category!');
        } else {
            axios.post(`/api/${page}`, values)
                .then(res => {
                    console.log(res.data[0]);
                    toggleForm();
                    setValues(res.data);
                })
                .catch(err => console.log(err));
        }
    }

    const setCategory = (e) => {
        handleChange(e);
        setSelectedCategory(e.target.value);
    }

    useEffect(() => {
        if (fields.includes('category')){
    
            axios.get('/api/budgets')
                .then(res => {
                    const names = res.data.map(category => category.name);
                    setCategories(names);
                })
                .catch(err => console.log(err))
        }
    }, []);

    return (
        <>
        <form className='form'>
            {fields.map((field, i) => {

                if (field === 'category'){
                    console.log("categories!");
                    return (
                        <div key={i}> 
                            <label>Category: </label>
                            <select value={selectedCategory} onChange={setCategory} name='category'>
                                <option selected>Select One</option>
                                {categories.map((name, i) => {
                                    return <option key={i} value={name} >{name.toUpperCase()}</option>
                                })}
                            </select>
                        </div>
                    )
                }
                return (
                    <div key={i}>
                        <label>{field.toUpperCase()}: </label>
                        <input value={values.field}
                            name={field}
                            onChange={handleChange}
                            />
                    </div>
                )
            })}

            <button onClick={info}>SUBMIT</button>
        </form>
        <button onClick={toggleForm}>CLOSE</button>
        </>
    )
}



export default Form;