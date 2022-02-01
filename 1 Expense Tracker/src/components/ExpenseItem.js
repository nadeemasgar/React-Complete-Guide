import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate  date={props.date} />
            <div className="expense-item__description"> 
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;

/* Use className instead of class */  

/* 
  Props allows you to make the components reusable and it allows you to pass data from another componnet to this component
*/ 