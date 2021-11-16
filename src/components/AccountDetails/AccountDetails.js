import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal';
import EditAccountDetailsForm from '../EditAccountDetailsForm/EditAccountDetailsForm';
import Button from '../Button/Button';
import './accountDetails.css'

const AccountDetails = (props) => {

    const [accounts, setAccounts] = useState([]);
    const [editFormStatus, setEditFormStatus ] = useState(false);
    const [targetAccount, setTargetAccount] = useState({});

    useEffect(() => {
        axios.get('/api/accounts')
            .then(res => setAccounts(res.data))
            .catch(err => console.log(err))
    }, []);

    const toggleEditForm = () => {
        setEditFormStatus(!editFormStatus);
    }

    const openEditForm = (account) => {
        toggleEditForm();
        console.log(account);
        setTargetAccount(account);
        
    }

    return (
        <>
        <Button location={props.location.pathname} setValues={setAccounts} />

        <h2>Account Details</h2>

        <h3>Checking</h3>
        {accounts.filter(account => account.type.toLowerCase() === 'checking').map(account => {
            return (
                <div onClick={() => openEditForm(account)}>
                <h4>{account.name}</h4>
                <h6>{account.notes}</h6>
                <h6>{account.amount}</h6>
                </div>
            )
        })}

        <h3>Saving</h3>
        {accounts.filter(account => account.type.toLowerCase() === 'savings').map(account => {
            return (
                <div onClick={() => openEditForm(account)}>
                <h4>{account.name}</h4>
                <h6>{account.notes}</h6>
                <h6>{account.amount}</h6>
                </div>
            )
        })}

        <h3>Debt</h3>
        {accounts.filter(account => account.type.toLowerCase() === 'debt').map(account => {
            return (
                <div onClick={() => openEditForm(account)}>
                <h4>{account.name}</h4>
                <h6>{account.notes}</h6>
                <h6>{account.amount}</h6>
                </div>
            )
        })}

        {editFormStatus && 
                <Modal>
                    <EditAccountDetailsForm 
                        page={props.location.pathname}
                        toggleForm={toggleEditForm}
                        account={targetAccount}
                        setValues={setAccounts} />
                </Modal>}

        </>
    )
}

export default AccountDetails;