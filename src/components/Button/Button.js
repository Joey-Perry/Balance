import React, { useState } from 'react';
import Modal from '../Modal/Modal'
import Form from '../Form/Form'

const Button = (location) => {

    const [formStatus, setFormStatus] = useState(false);

    const toggleForm = () => {
        setFormStatus(!formStatus);
    }
    const page = location.location;
    let fields = [];

    if (page === '/transactions'){
        fields = ['vendor', 'amount', 'category', 'description', 'date'];
    } else if (page === '/budgets'){
        fields = ['name', 'expected', 'date'];
    } else if (page === '/accountDetails'){
        fields = ['type', 'name', 'notes', 'amounts'];
    }

    
    // console.log(page);
    // console.log(fields);

    return (
        <>
        <button onClick={toggleForm}> ADD NEW </button>

        {formStatus && 
        
            <Modal>
                <Form toggleForm={toggleForm} fields={fields} page={page}/>
            </Modal>}



        </>
    )
}

export default Button;