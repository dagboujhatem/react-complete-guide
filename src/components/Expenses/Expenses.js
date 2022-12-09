import React, { useState } from 'react';
// import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const { expenses } = props;
    const [selectedYear, setSelectedYear] = useState('2020')
    const filterHandler = (filterOption) => {
        // console.log(filterOption);
        setSelectedYear(filterOption);
    }
    const filtredExpenses = expenses.filter(item => item.date.getFullYear() === Number(selectedYear));
    // const noExpensesItemFound = <div>No expenses found !</div>

    return (
        <div className='expenses'>
            <ExpensesFilter selected={selectedYear} changeFilter={filterHandler} />
            {/* {
                filtredExpenses.length > 0 ?
                filtredExpenses.map(expense => {
                    return <ExpenseItem key={expense.id} expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount} />
                }) : <div>No expenses found !</div>
            } */}

            {/* 2nd Way to do that */}
            {/* If the fisrt part is TRUE ==> So JSX show the second part */}
            {/* {filtredExpenses.length === 0 && <div>No expenses found !</div>}
            {
                filtredExpenses.length > 0 &&
                filtredExpenses.map(expense => {
                    return <ExpenseItem key={expense.id} expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount} />
                })
            } */}

            {/* 3th way : using const to store JSX variables */}
            {/* {filtredExpenses.length === 0 && noExpensesItemFound}
            {
                filtredExpenses.length > 0 &&
                filtredExpenses.map(expense => {
                    return <ExpenseItem key={expense.id} expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount} />
                })
            } */}

            {/* 4th way  */}
            <ExpensesChart expenses={filtredExpenses} />
            <ExpensesList item={filtredExpenses} />
        </div>
    );
}

export default Expenses;
