import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const { expenses } = props;
    const [selectedYear, setSelectedYear] = useState('2019')
    const filterHandler = (filterOption) =>{
        // console.log(filterOption);
        setSelectedYear(filterOption);
    }
    return (
        <div className='expenses'>
            <ExpensesFilter selected={selectedYear} changeFilter={filterHandler}/>
            {
                expenses.map(item => {
                    return <ExpenseItem key={item.id} expenseDate={item.date} expenseTitle={item.title} expenseAmount={item.amount} />
                })
            }
        </div>
    );
}

export default Expenses;
