import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import EditTransactionsForm from '../EditTransactionsForm/EditTransactionsForm';
import './transactions.css';

const Transactions = (props) => {

    const [transactions, setTransactions] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [editFormStatus, setEditFormStatus] = useState(false);


    const toggleEditForm = () => {
        setEditFormStatus(!editFormStatus);
    }

    const openEditForm = (e, id) => {
        toggleEditForm();
        // console.log(e.target);
        const targetCategory = transactions.filter(item => item.id === id);
        setActiveCategory(targetCategory);
        // console.log(targetCategory);
    }

    useEffect(() => {
        axios.get('/api/transactions')
            .then(res => setTransactions(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <section className='transactions-overview'>
        <h1>Transactions</h1>

        <section className='transactions-container'>
        {transactions.sort((a, b) => a.id - b.id).map(transaction => {
            
            return (
                <section className='transactions' key={transaction.id} onClick={(e) => openEditForm(e, transaction.id)}>

                    <section className='vendor-and-date'>
                        <h4 className='vendor'>{transaction.vendor}</h4>
                        <h6>{transaction.description}</h6>
                        <h6>{transaction.date.split('T')[0]}</h6>
                    </section>

                    <h6 className='category'>{transaction.category}</h6>
                    
                    <h3 className='amount'>${transaction.amount}</h3>
                </section>
            )
        })}
        </section>

        {editFormStatus && 
                <Modal>
                    <EditTransactionsForm 
                        page={props.location.pathname}
                        toggleForm={toggleEditForm} 
                        category={activeCategory} 
                        setValues={setTransactions} 
                        />
                </Modal>}

        <Button location={props.location.pathname} setValues={setTransactions}/>
        </section>
    )
}

export default Transactions;