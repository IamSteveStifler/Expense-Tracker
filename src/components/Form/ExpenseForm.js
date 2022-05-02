import React, {useState} from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) =>{

    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const categoryHandler = (event) =>{
        setCategory(event.target.value);
    }

    const AmountHandler = (event) =>{
        setAmount(event.target.value);
    }

    const DateHandler = (event) =>{
        setDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const data = {
            category : category,
            amount : amount,
            date : new Date(date)
        };

        // console.log(data);

        props.driverHandler(data);

        setCategory('');
        setAmount('');
        setDate('');
        
    }
// ``
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Category : </label>
                    <input type = "text" value = {category} onChange={categoryHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount : </label>
                    <input type = "number" value={amount} onChange={AmountHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date : </label>
                    <input type = "date" value = {date} onChange={DateHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type = "submit">Add New Row</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;