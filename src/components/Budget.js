import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { budget, expenses, dispatch  } = useContext(AppContext);

    const handleBudget = (val) => {

        const totalSpent = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        val = parseInt(val);
        if(val > 20000)
        {
            alert('The value can not be more than 20,000');
        }
        if(val <= totalSpent)
        {
            alert('You cannot reduce the budget value lower than the spending');
        }
        else
        {
            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(val),
            })
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{
                <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                step='10'
                style={{ size: 10}}
                max='20000'
                onChange={(e)=>handleBudget(e.target.value)}>
                </input>
                }</span>
        </div>
    );
};
export default Budget;
