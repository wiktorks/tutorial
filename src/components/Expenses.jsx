import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const items = props.items;

  return (
    <div className="expenses">
      {items.map((item, i) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
