import React, { useState } from 'react';
import Modal from '../Modal/Modal'
import Form from '../Form/Form'

const Button = (location) => {

    const [formStatus, setFormStatus] = useState(false);

    const toggleForm = () => {
        setFormStatus(!formStatus);
    }

    let fields = [];

    if (location === '/transactions'){
        fields = ['vendor', 'amount', 'category', 'description', 'date'];
    } else if (location === '/budget'){
        fields = ['expected', 'name', 'date'];
    } else if (location === '/accountDetails'){
        fields = ['type', 'name', 'notes', 'amounts'];
    }

    return (
        <>
        <button onClick={toggleForm}> ADD NEW </button>

        {formStatus && 
        
            <Modal>
                <Form toggleForm={toggleForm} fields={fields}/>
            </Modal>}



        </>
    )
}

export default Button;