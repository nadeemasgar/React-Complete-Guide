import ExpenseItem from "./components/ExpenseItem";

function App() {
  /* Component */
  return (
    /* Desired end state - div, h2, p */
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

/* A component in react is just a javascript function that return JSX code */
