import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useForm from '../../utils/useForm';
import './editTransactionsForm.css';

const EditTransactionsForm = ({toggleForm, category, page, setValues }) => {
    const [ values, handleChange ] = useForm(category[0]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(category[0].category);
    
    // console.log(category);
    // console.log(page);
    
    const info = (e) => {
        e.preventDefault();

        // console.log(values);

        axios.put(`/api/${page}`, values)
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

    useEffect(() => {
        axios.get('/api/budgets')
        .then(res => {
            const names = res.data.map(category => category.name);
            setCategories(names);
        })
        .catch(err => console.log(err))
    }, []);

    const setCategory = () => {
        console.log(selectedCategory);
        setSelectedCategory(selectedCategory);
    }

    return (
        <>
            <form className='form'>


                <label>Vendor: </label>
                <input value={values.vendor}
                    name='vendor'
                    onChange={handleChange} />

                <label>Amount: </label>
                <input value={values.amount}
                    name='amount'
                    onChange={handleChange} />

                <label>Category</label>
                {/* <input value={values.category}
                    name='category'
                    onChange={handleChange} /> */}

                <select value={selectedCategory} onChange={setCategory} name='category'>
                    <option selected>Select One</option>
                        {categories.map((name, i) => {
                            return <option key={i} value={name} >{name.toUpperCase()}</option>
                            })}
                </select>

                <label>Description</label>
                <input value={values.description}
                    name='description'
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

export default EditTransactionsForm;