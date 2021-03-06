import React, { useState } from 'react';
import Modal from '../Modal/Modal'
import Form from '../Form/Form'
import './button.css';

const Button = ({location, setValues}) => {

    const [formStatus, setFormStatus] = useState(false);
    const [editFormStatus, setEditFormStatus] = useState(false);


    const toggleForm = () => {
        setFormStatus(!formStatus);
    }

    const toggleEditForm = () => {
        setEditFormStatus(!editFormStatus);
    }

    let fields = [];

    if (location === '/transactions'){
        fields = ['vendor', 'amount', 'category', 'description', 'date'];
    } else if (location === '/budgets'){
        fields = ['name', 'expected', 'date'];
    } else if (location === '/account-details'){
        fields = ['type', 'name', 'notes', 'amount'];
    }

    return (
        <>
        <button onClick={toggleForm} className='add-new-btn'> + </button>

        {formStatus && 
        
            <Modal>
                <Form 
                    toggleForm={toggleForm} 
                    fields={fields} 
                    page={location} 
                    setValues={setValues} />
            </Modal>}

        </>
    )
}

export default Button;