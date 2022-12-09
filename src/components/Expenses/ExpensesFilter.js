import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const initialOptions = ['2019', '2020', '2021', '2022']
    const [yearOptions] = useState(initialOptions)
    const filterChangeHandler = (e) => {
        // console.log(e.target.value)
        const selectedYear = e.target.value;
        props.changeFilter(selectedYear);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={filterChangeHandler}>
                    {/* <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option> */}
                    {
                        yearOptions.map((option, index)=>  <option key={index} value={option}>{option}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;