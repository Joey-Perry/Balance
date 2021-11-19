import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './dash.css';

const Dash = (props) => {

    const [checking, setChecking] = useState(0);
    const [savings, setSavings] = useState(0);
    const [debt, setDebt] = useState(0);
    const [networth, setNetworth] = useState(0);

    useEffect(() => {
        axios.get('/api/accounts')
            .then(res => {
                // console.log(res.data);

                const checkingAccounts = res.data.filter(account => account.type === 'checking');
                const checkingTotal = checkingAccounts.reduce((acc, curr) => {
                    return acc + curr.amount;
                }, 0);
                setChecking(checkingTotal);

                const savingsAccounts = res.data.filter(account => account.type === 'savings');
                const savingsTotal = savingsAccounts.reduce((acc, curr) => {
                    return acc + curr.amount;
                }, 0);
                setSavings(savingsTotal);

                const debtAccounts = res.data.filter(account => account.type === 'debt');
                const debtTotal = debtAccounts.reduce((acc, curr) => {
                    return acc + curr.amount;
                }, 0);
                setDebt(debtTotal);

                setNetworth(checkingTotal + savingsTotal - debtTotal);

            })
            .catch(err => console.log(err));
    }, [networth]);

    return (
        <section className='dash'>

        <h1 className='overview'>DASHBOARD</h1>

        <section className='account networth-section'>
            <h6 className='networth'>NET WORTH</h6>
            <h2>${networth}</h2>
        </section>

        <section className='account-totals'>
            
            <section className='account checking-section'>
                <h6 className='checking'>CHECKING</h6>
                <h2>${checking}</h2>
            </section>

            <section className='account savings-section'>
                <h6 className='savings'>SAVINGS</h6>
                <h2>${savings}</h2>
            </section>

            <section className='account debt-section'>
                <h6 className='debt'>DEBT</h6>
                <h2>$({debt})</h2>
            </section>

        </section>

        </section>
    )
}

export default Dash;