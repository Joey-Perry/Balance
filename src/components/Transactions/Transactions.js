import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';
import './transactions.css';

const Transactions = (props) => {

    const [transactions, setTransactions] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');


    // const toggleEditForm = () => {
    //     setEditFormStatus(!editFormStatus);
    // }

    const openEditForm = (e, id) => {
        // toggleEditForm();
        console.log(e.target);
        const targetCategory = transactions.filter(item => item.id === id);
        // setActiveCategory(targetCategory);
        console.log(targetCategory);
    }

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
        {transactions.map(transaction => {
            
            return (
                <section className='transactions' key={transaction.id} onClick={(e) => openEditForm(e, transaction.id)}>

                    <section className='vendor-and-date'>
                        <h4 className='vendor'>{transaction.vendor}</h4>
                        <h6>{transaction.description}</h6>
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