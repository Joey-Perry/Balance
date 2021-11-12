import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './accountDetails.css'

const AccountDetails = () => {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios.get('/api/accounts')
            .then(res => setAccounts(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
        <button>Add New</button>

        <h2>Account Details</h2>

        <h3>Checking</h3>
        {accounts.filter(account => account.type === 'checking').map(account => {
            return (
                <>
                <h4>{account.name}</h4>
                <h6>{account.notes}</h6>
                <h6>{account.amount}</h6>
                </>
            )
        })}

        <h3>Saving</h3>
        {accounts.filter(account => account.type === 'saving').map(account => {
            return (
                <>
                <h4>{account.name}</h4>
                <h6>{account.notes}</h6>
                <h6>{account.amount}</h6>
                </>
            )
        })}

        <h3>Debt</h3>
        {accounts.filter(account => account.type === 'debt').map(account => {
            return (
                <>
                <h4>{account.name}</h4>
                <h6>{account.notes}</h6>
                <h6>{account.amount}</h6>
                </>
            )
        })}

        </>
    )
}

export default AccountDetails;