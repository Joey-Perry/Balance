import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './transactions.css';

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('/api/transactions')
            .then(res => setTransactions(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        <h1>Transactions</h1>

        <section className='transactions-container'>
        {transactions.map(transaction => {
            return (
                <section className='transactions'>

                <section className='vendor-and-date'>
                    <h4 className='vendor'>{transaction.vendor}</h4>
                    <h6>{transaction.date}</h6>
                </section>

                <h6 className='category'>{transaction.category}</h6>
                
                <h3 className='amount'>${transaction.amount}</h3>
            </section>
            )
        })}
        </section>
        </>
    )
}

export default Transactions;