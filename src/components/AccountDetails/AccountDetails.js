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
        <section className='account-details'>

        <h2>Account Details</h2>
        <section className='accounts-by-type'>
            <section className='individual-accounts'>
            <h3>Checking</h3>
            {accounts.filter(account => account.type.toLowerCase() === 'checking').map(account => {
                return (
                    <div onClick={() => openEditForm(account)} key={account.id} className='specific-accounts'>
                    <h4 className='account-name'>{account.name}</h4>
                    <h6 className='account-amount'>${account.amount}</h6>
                    <h6 className='account-notes'>{account.notes}</h6>
                    </div>
                )
            })}
            </section>

            <section className='individual-accounts'>
            <h3>Saving</h3>
            {accounts.filter(account => account.type.toLowerCase() === 'savings').map(account => {
                return (
                    <div onClick={() => openEditForm(account)} key={account.id} className='specific-accounts'>
                    <h4 className='account-name'>{account.name}</h4>
                    <h6 className='account-amount'>${account.amount}</h6>
                    <h6 className='account-notes'>{account.notes}</h6>
                    </div>
                )
            })}
            </section>


            <section className='individual-accounts'>
            <h3>Debt</h3>
            {accounts.filter(account => account.type.toLowerCase() === 'debt').map(account => {
                return (
                    <div onClick={() => openEditForm(account)} key={account.id} className='specific-accounts'>
                    <h4 className='account-name'>{account.name}</h4>
                    <h6 className='account-amount'>${account.amount}</h6>
                    <h6 className='account-notes'>{account.notes}</h6>
                    </div>
                )
            })}
            </section>
        </section>
        <Button location={props.location.pathname} setValues={setAccounts} />

        {editFormStatus && 
                <Modal>
                    <EditAccountDetailsForm 
                        page={props.location.pathname}
                        toggleForm={toggleEditForm}
                        account={targetAccount}
                        setValues={setAccounts} />
                </Modal>}

        </section>
    )
}

export default AccountDetails;