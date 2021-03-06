import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  /* Component */

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {   /* pass a function to update the state if it is based on older snapshot of the same state */
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpese={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

/* A component in react is just a javascript function that return JSX code */
/* Pass the data of these different objects to the different ExpenseItem */
/* These ExpenseItem are configurable from outside of the component */
/* The data is stored nopt inside of them but received from outside. This is achieved using Props concept  */
/* In App.js, we can add attributes to the custom HTML elements */

/* 
  Parameter is used to access the values defined in the place where we use our custom components.
  We will get only one parameter in every component. One parameter is the object which holds all the received attribute as properties
*/
