import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"; // Go up 1 level for Card.js
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onchageFilter={filterChangeHandler}
        />

        {props.items.map((expense) => {
          return <ExpenseItem
            title={expense.tilte}
            amount={expense.amount}
            date={expense.date}
          />;
        })}

      </Card>
    </div>
  );
};

export default Expenses;
