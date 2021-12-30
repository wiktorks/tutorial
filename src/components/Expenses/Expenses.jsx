import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2022");

  const filteredItems = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(yearFilter)
  );
  const onYearSelect = (year) => {
    setYearFilter(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilter} onYearSelect={onYearSelect} />
      {/* React potrafi ogarnąć tablicę elementów w JSX */}
      {/* JS trick: 
      {filteredItems.length === 0 && <p>No expenses found.</p>} */}
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
