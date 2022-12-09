import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022,2,28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    // let { expenseDate, expenseTitle, expenseAmount } = props;

    const [title, setTitle] = useState(props.expenseTitle);
    const [amount] = useState(props.expenseAmount);
    const [date] = useState(props.expenseDate);

    // click event 
    const clickHandler = () => {
        // The re-assignment of any varible is NOT A TRIGGER FOR TEMPLATE RERENDRING 
        // SOLUTION : use sate in this case
        // console.log('Clicked !')
        // console.log(expenseTitle)
        // expenseTitle = 'Updated title!'
        // console.log(expenseTitle)

        /**
         *  Change using the state named title 
         * 
         */

        // Error in assignment of the state
        // title = 'updated state';

        // Correct assignment
        console.log({ title, amount, date })
        setTitle('Title changed !')

    }

    return (
        <Card className="expense-item">
            <div>
                {/* {expenseDate.toISOString()} */}
                <ExpenseDate expenseDate={date} />
            </div>
            <div className="expense-item__description">
                {/* <div> {2+2} </div>
                <div>{Math.random()}</div> */}
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            {/* JSX basic event binding */}
            {/* <button onClick={()=>{console.log('Clicked !')}}>Change title</button> */}

            {/* JSX : click event is executed automaticly in this exemple => DO NOT use the () */}
            {/* in this exemple bellow : the function click Handler is executed in evalution of this JSX props */}
            {/* <button onClick={clickHandler()}>Change title</button> */}

            {/* JSX event binding correctly */}
            {/* <button onClick={clickHandler}>Change title</button> */}
        </Card>
    )
}

export default ExpenseItem;