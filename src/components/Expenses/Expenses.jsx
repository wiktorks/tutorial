import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import "./Expenses.css";

const Expenses = (props) => {
  const items = props.items;

  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
