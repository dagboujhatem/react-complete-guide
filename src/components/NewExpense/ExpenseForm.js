import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const initialState = { title: '', amount: '', date: '2022-12-09' };
    const [data, setData] = useState(initialState);
    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        // console.log(name)
        // console.log(value)

        // update the state
        // console.log({...data, [name]: value})
        //setData({...data, [name]: value})

        // update state (Best way: safe way)
        setData((prevState) => {
            return { ...prevState, [name]: value }
        })

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const entredData = {
            title: data.title,
            amount: +data.amount,
            date: new Date(data.date),
            id: Math.random().toString()
        };
        // console.log(entredData);

        // NOTE: props can pass function from child to parent (like @output in Angular)
        // Link : https://www.positronx.io/react-send-data-from-child-to-parent-component-tutorial/
        props.onSaveExpenseData(entredData)
        // reset form after submit event
        setData({ title: '', amount: '', date: '' });
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" placeholder='Type the title here' name='title' value={data.title} onChange={inputChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' placeholder='Type the title here' name='amount' value={data.amount} onChange={inputChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' name='date' value={data.date} onChange={inputChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Candel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
