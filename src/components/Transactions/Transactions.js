import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';
import './transactions.css';

const Transactions = (props) => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('/api/transactions')
            .then(res => setTransactions(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        <h1>Transactions</h1>

        <Button location={props.location.pathname} setValues={setTransactions}/>

        <section className='transactions-container'>
        {transactions.map((transaction, i) => {
            return (
                <section className='transactions' key={i}>

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