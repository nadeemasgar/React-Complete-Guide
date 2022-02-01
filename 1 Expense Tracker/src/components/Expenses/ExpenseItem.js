import React from "react";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate  date={props.date} />
            <div className="expense-item__description"> 
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={ () => {console.log('Clicked')}}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;

/* Use className instead of class */ 

/* 
  Props allows you to make the components reusable and it allows you to pass data from another componnet to this component
*/ 