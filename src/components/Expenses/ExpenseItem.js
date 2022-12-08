import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022,2,28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    const { expenseDate, expenseTitle, expenseAmount } = props;
    return (
        <Card className="expense-item">
            <div>
                {/* {expenseDate.toISOString()} */}
                <ExpenseDate expenseDate={expenseDate}/>
            </div>
            <div className="expense-item__description">
                {/* <div> {2+2} </div>
                <div>{Math.random()}</div> */}
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;