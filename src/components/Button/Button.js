import React, { useState } from 'react';
import Modal from '../Modal/Modal'
import Form from '../Form/Form'

const Button = ({location}) => {

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
    } else if (location === '/accountDetails'){
        fields = ['type', 'name', 'notes', 'amounts'];
    }

    return (
        <>
        <button onClick={toggleForm}> ADD NEW </button>
        <button onClick={toggleForm}> EDIT MODE </button>

        {formStatus && 
        
            <Modal>
                <Form toggleForm={toggleForm} fields={fields} page={location} />
            </Modal>}

        {editFormStatus && 
            <Modal>
                <Form toggleForm={toggleEditForm} />
            </Modal>}

        </>
    )
}

export default Button;