import ExpenseItem from "./components/ExpenseItem";

function App() {
  /* Component */
  const expenses = [
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
  return (
    /* Desired end state - div, h2, p */
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

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

*/
  App file se data move kiya ExpenseItem me___ and ExpenseItem se move kiya ExpenseDate me
 */
