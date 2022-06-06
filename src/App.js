import ExpenseEntryItemList from "./ExpenseEntryItemList";

const items = [
  { id: 1, name: "Pizza", amount: 80, currencyType: "₹", description: "Food" },
  {
    id: 2,
    name: "Grape Juice",
    amount: 30,
    currencyType: "$",
    description: "Food"
  },
  {
    id: 3,
    name: "Cinema",
    amount: 210,
    currencyType: "₹",
    description: "Entertainment"
  },
  {
    id: 4,
    name: "Java Programming book",
    amount: 242,
    currencyType: "$",
    description: "Academic"
  },
  {
    id: 5,
    name: "Mango Juice",
    amount: 35,
    currencyType: "₹",
    description: "Food"
  }
];

function App() {
  return (
    <div className="App">
      <ExpenseEntryItemList items={items} />
    </div>
  );
}

export default App;
