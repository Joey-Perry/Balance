import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './budget.css';
import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';

const Budget = (props) => {

    const [budgets, setBudgets] = useState([]);
    const [showExpected, setShowExpected] = useState(true);
    const [showActual, setShowActual] = useState(false);
    const [editFormStatus, setEditFormStatus ] = useState(false);
    const [activeCategory, setActiveCategory] = useState({});
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        axios.get('/api/budgets')
            .then(res => {
                setBudgets(res.data);
            })
            .catch(err => console.log(err))

        axios.get('/api/transactions')
            .then(res => setTransactions(res.data))
            .catch(err => console.log(err))
    }, [])

    // console.log({budgets});
    // console.log({transactions});

    const displayExpected = (e) => {
        setShowExpected(true);
        setShowActual(false);
        e.target.parentNode.childNodes.forEach(child => {
            child.classList.remove('active');
        });
        e.target.classList.toggle('active');
    }

    const displayActual = (e) => {
        setShowExpected(false);
        setShowActual(true);
        e.target.parentNode.childNodes.forEach(child => {
            child.classList.remove('active');
        });
        e.target.classList.toggle('active');

        budgets.map(budget => {
            const selectedTransactions = transactions.filter(transaction => transaction.category === budget.name);
            budget.actual = selectedTransactions.reduce((acc, curr) => {
                return acc + curr.amount
            }, 0)
            return budget;
        })
        // console.log({budgets});
    }

    const displayRemainder = (e) => {
        setShowExpected(false);
        setShowActual(false);
        e.target.parentNode.childNodes.forEach(child => {
            child.classList.remove('active');
        });
        e.target.classList.toggle('active');
    }

    const toggleEditForm = () => {
        setEditFormStatus(!editFormStatus);
    }

    const openEditForm = (e) => {
        toggleEditForm();
        const targetCategory = budgets.filter(category => category.name === e.target.innerText);
        setActiveCategory(targetCategory);
    }

    return (
        <section className='budgets'>
            <h1>Budget Categories</h1>

            <section className='budget-headers'>
                <h4 onClick={displayExpected} className='active'>Expected</h4>
                <h4 onClick={displayActual}>Actual</h4>
                <h4 onClick={displayRemainder}>Remaining</h4>
            </section>

            <section>
                {budgets.sort((a, b) => a.id - b.id).map(category => {
                    let displayAmount = 0;
                    if (showExpected){
                        displayAmount = category.expected
                    } else if (showActual){
                        displayAmount = category.actual
                    } else {
                        displayAmount = category.expected - category.actual
                    }

                    return (
                        <section className='categories' key={category.id} onClick={openEditForm}>
                            <h3 className='category-name'>{category.name}</h3>
                            <h3 className='category-amount'>{displayAmount}</h3>
                        </section>
                    )
                })}
            </section>

            <Button location={props.location.pathname} setValues={setBudgets} />

            {editFormStatus && 
                <Modal>
                    <EditForm 
                        page={props.location.pathname}
                        toggleForm={toggleEditForm} 
                        category={activeCategory} 
                        setValues={setBudgets} />
                </Modal>}

        </section>
    )
}

export default Budget;