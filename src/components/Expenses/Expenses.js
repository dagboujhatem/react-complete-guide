import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const { expenses } = props;
    const [selectedYear, setSelectedYear] = useState('2020')
    const [filtredExpenses, setFiltredExpenses] = useState(expenses)
    const filterHandler = (filterOption) =>{
        // console.log(filterOption);
        setSelectedYear(filterOption);
        const filtredExpenses = expenses.filter(item => item.date.getFullYear() === Number(selectedYear))
        setFiltredExpenses(filtredExpenses)
    }

    return (
        <div className='expenses'>
            <ExpensesFilter selected={selectedYear} changeFilter={filterHandler}/>
            {
                filtredExpenses.map(expense => {
                    return <ExpenseItem key={expense.id} expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount} />
                })
            }
        </div>
    );
}

export default Expenses;
