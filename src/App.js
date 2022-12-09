import Expenses from "./components/Expenses/Expenses";
import './App.css';
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  const initialExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses)

  const addExpenseHandler = (expenseData) => {
    // recive data from the child component
    // console.log(expenseData)
    // update the state 
    setExpenses((prevState)=>{
      return [expenseData, ...prevState]
    })
  }

  // create element take 3 arguments 
  // 1. nodeName :  name of html tag / or React component
  // 2. props : list of props as an object
  // 3. ...args : a list of child nodes
  return React.createElement(
    'div', // the node name
    {},  // the props
    // ... args: the child nodes 
    React.createElement('div', { className: 'title' }, "Let's get started !"),
    React.createElement(NewExpense, { expenses, addExpense: addExpenseHandler }),
    React.createElement(Expenses, { expenses }),
  )

  // return (
  //   <div>
  //     <div className="title">Let's get started !</div>
  //     <Expenses expenses={expenses}/>
  //   </div>
  // );
}

export default App;
