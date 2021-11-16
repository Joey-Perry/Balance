import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Actual = () => {

    const [budgets, setBudgets] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('/api/budgets')
            .then(res => setBudgets(res.data))
            .catch(err => console.log(err))

        axios.get('/api/transactions')
            .then(res => setTransactions(res.data))
            .catch(err => console.log(err))
    })

    const formatBudgetActuals = () => {
        budgets.map(budget => {
            const selectedTransactions = transactions.filter(transaction => transaction.category === budget.name);
            // console.log(selectedTransactions);
            budget.actual = selectedTransactions.reduce((acc, curr) => {
                return acc + curr.amount
            }, 0)
            return budget;
        })
    }

    return (
        <h1 onClick={formatBudgetActuals}>ACTUAL</h1>
    )
}

export default Actual;