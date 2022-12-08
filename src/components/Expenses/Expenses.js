import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    const { expenses } = props;
    return (
        <div className='expenses'>
            {
                expenses.map(item => {
                    return <ExpenseItem key={item.id} expenseDate={item.date} expenseTitle={item.title} expenseAmount={item.amount} />
                })
            }
        </div>
    );
}

export default Expenses;
