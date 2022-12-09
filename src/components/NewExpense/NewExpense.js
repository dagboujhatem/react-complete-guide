import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (entredData) => {
    // recive data from the child component
    // console.log(entredData)
    props.addExpense(entredData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
