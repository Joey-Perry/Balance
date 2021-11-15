import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Button from '../Button/Button';
import './accountDetails.css'

const AccountDetails = (props) => {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios.get('/api/accounts')
            .then(res => setAccounts(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
        <Button location={props.location.pathname} setValues={setAccounts} />

        <h2>Account Details</h2>

        <h3>Checking</h3>
        {accounts.filter(account => account.type.toLowerCase() === 'checking').map(account => {
            return (
                <>
                <h4>{account.name}</h4>
                <h6>{account.notes}</h6>
                <h6>{account.amount}</h6>
                </>
            )
        })}

        <h3>Saving</h3>
        {accounts.filter(account => account.type.toLowerCase() === 'savings').map(account => {
            return (
                <>
                <h4>{account.name}</h4>
                <h6>{account.notes}</h6>
                <h6>{account.amount}</h6>
                </>
            )
        })}

        <h3>Debt</h3>
        {accounts.filter(account => account.type.toLowerCase() === 'debt').map(account => {
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