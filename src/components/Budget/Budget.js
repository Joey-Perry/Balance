import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './budget.css';

const Budget = () => {

    const [budgets, setBudgets] = useState([]);
    const [totalPlanned, setTotalPlanned] = useState(0);
    const [showExpected, setShowExpected] = useState(true);
    const [showActual, setShowActual] = useState(false);
    
    useEffect(() => {
        axios.get('/api/budgets')
            .then(res => {
                setBudgets(res.data);
                setTotalPlanned(res.data.reduce((acc, curr) => {
                    return acc + curr.expected
                },0));
            })
            .catch(err => console.log(err))
    }, [])

    // console.log({budgets});

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
    }

    const displayRemainder = (e) => {
        setShowExpected(false);
        setShowActual(false);
        e.target.parentNode.childNodes.forEach(child => {
            child.classList.remove('active');
        });
        e.target.classList.toggle('active');
    }

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
                    <h3>$2700</h3>
                </section>

                <section className='section'>
                    <h6>Total Remaining</h6>
                    <h3>$300</h3>
                </section>
            </section>

            <section className='budget-headers'>
                <h4 onClick={displayExpected} className='active'>Expected</h4>
                <h4 onClick={displayActual}>Actual</h4>
                <h4 onClick={displayRemainder}>Remaining</h4>
            </section>

            <section>
                {budgets.map(category => {
                    let displayAmount = 0;
                    if (showExpected){
                        displayAmount = category.expected
                    } else if (showActual){
                        displayAmount = category.actual
                    } else {
                        displayAmount = category.expected - category.actual
                    }

                    return (
                        <section className='categories'>
                            <h3 className='category-name'>{category.name}</h3>
                            <h3 className='category-amount'>{displayAmount}</h3>
                        </section>
                    )
                })}
            </section>


        </>
    )
}

export default Budget;