import React from "react";
import './ExpenseTracker.css';
import Card from '../UI/Card';
function ExpenseTracker(props){
   
    return(
        <Card className="expense-item">
            <div className = "inside-items">{props.month + " "}{props.date+ " "} {props.year}</div>
            <div className = "expense-item__desc">
                <h2>{props.category}</h2>
                <div className='expense-item__amt'>{props.amount}
                </div>

            </div>
        </Card>
    );
}

export default ExpenseTracker;