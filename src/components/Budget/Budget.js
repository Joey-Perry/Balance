import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './budget.css';

const Budget = () => {

    const [budgets, setBudgets] = useState([]);
    const [totalPlanned, setTotalPlanned] = useState(0);
    
    useEffect(() => {
        axios.get('/api/budgets')
            .then(res => setBudgets(res.data))
            .catch(err => console.log(err))
    })

    useEffect(() => {
        const total = budgets.reduce((acc, curr) => {
            return acc + curr.expected
        }, 0)
        setTotalPlanned(total);
    })

    console.log({budgets});

    return (
        <>
            <h1>October Budget</h1>

            <section className='budget-overview'>
                <section className='section'>
                    {/* calculated based on income put in transactions for that month */}
                    <h6>Income</h6>
                    <h3>$3000</h3>
                </section>

                <section className='section'>
                    {/* calculated based on expected amounts in each category */}
                    <h6>Total Planned</h6>
                    <h3>{totalPlanned}</h3>
                </section>

                <section className='section'>
                    <h6>Total Remaining</h6>
                    <h3>$300</h3>
                </section>
            </section>

            <table>
                <thead>
                    <tr>
                        <th>
                            {/* user input on this screen */}
                            <h4>Category</h4>
                        </th>
                    
                        <th>
                            {/* user input on this screen */}
                            <h4>Expected</h4>
                        </th>
                        <th>
                            {/* calculated based on transactions */}
                            <h4>Actual</h4>
                        </th>
                        <th>
                            {/* calculated based on expected - actual */}
                            <h4>Remainder</h4>
                        </th>
                    </tr>
                    {budgets.map(row => {
                        return (<tr>
                            <td>{`${row.name}`}</td>
                            <td>{`${row.expected}`}</td>
                            <td>{`${row.actual}`}</td> 
                            </tr>)
                        })}
                </thead>
            </table>

        </>
    )
}

export default Budget;