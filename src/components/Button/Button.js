import React, { useState } from 'react';
import Modal from '../Modal/Modal'
import Form from '../Form/Form'

const Button = ({location, push}) => {

    const [formStatus, setFormStatus] = useState(false);
    

    const toggleForm = () => {
        setFormStatus(!formStatus);
    }

    let fields = [];

    if (location === '/transactions'){
        fields = ['vendor', 'amount', 'category', 'description', 'date'];
    } else if (location === '/budgets'){
        fields = ['name', 'expected', 'date'];
    } else if (location === '/accountDetails'){
        fields = ['type', 'name', 'notes', 'amounts'];
    }

    // console.log(page);
    // console.log(fields);

    return (
        <>
        <button onClick={toggleForm}> ADD NEW </button>

        {formStatus && 
        
            <Modal>
                <Form toggleForm={toggleForm} fields={fields} page={location} />
            </Modal>}



        </>
    )
}

export default Button;