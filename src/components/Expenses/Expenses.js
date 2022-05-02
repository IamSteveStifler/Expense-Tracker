import React from "react";
import ExpenseTracker from "./ExpenseTracker";
import './Expenses.css';
function Expenses(props){
    
    return(
        <div>     
            <div className = "expenses">
            {
                props.item.map(
                    exp => (

                        <ExpenseTracker date = {exp.date.getDate()}  
                        month = {exp.date.toLocaleString('en-US', {month : "long"})}
                        year = {exp.date.getFullYear()} category = {exp.category} amount = {exp.amount}/>

                    )
                )
            }

        </div>
        </div>
    );
}

export default Expenses;