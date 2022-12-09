import React from 'react'
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {
    if (props.item.length === 0) {
        return (
            <div>
                <h2 className='expenses-list__fallback'>No expenses found !</h2>
            </div>
        )
    } else {

        return (
            <ul className='expenses-list'>
                {
                    props.item.map(expense => {
                        return <ExpenseItem key={expense.id} expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount} />
                    })
                }
            </ul>
        )
    }

}

export default ExpensesList
