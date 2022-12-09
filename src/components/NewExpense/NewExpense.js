import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (entredData) => {
    // recive data from the child component
    // console.log(entredData)
    props.addExpense(entredData)
    setIsEditing(false);
  }

  // Show & hide add new expense button
  const [isEditing, setIsEditing] = useState(false)
  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing ?
        <button onClick={startEditingHandler}>Add new expense</button> :
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler} />
      }
    </div>
  )
}

export default NewExpense
