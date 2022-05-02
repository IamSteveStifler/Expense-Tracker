import React from "react";
import ExpenseForm from "./ExpenseForm";
import './ExpenseContainer.css';
const ExpenseContainer = (props) =>{
    const objHandler = (data) =>{
        const newdata = {id : Math.random().toString(), ...data
        };
        props.driverHandler(newdata);
        // console.log(newdata);
    }

    return(
        <div>
            <ExpenseForm driverHandler = {objHandler} />
        </div>
    );
}

export default ExpenseContainer;