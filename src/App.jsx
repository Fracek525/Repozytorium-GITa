import './App.css'
import ExpenseItem from './components/ExpenseItem'
import NewExpense from './components/NewExpense'
import ExpensesFilter from './components/ExpensesFilter'
import React, { useState } from 'react'
const init_data = [
  { id: "1", title: "Papier toaletowy", price: 3, date: new Date(2022, 10, 10) },
  { id: "2", title: "Koks", price: 5000, date: new Date(2021, 12, 12) },
  { id: "3", title: "piwo", price: 7, date: new Date(2020, 6, 11) },
];

export default function App() {

  const [expenses, setExpenses] = useState(init_data);

  const addExpenseHandler = (expense) => {
    setExpenses(prevexpense => [expense, ...prevexpense]);

  }
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter selected={filteredYear} onChangeFillter={filterChangeHandler} />
      <h2>Zaczynamy</h2>
      {
        expenses.map((expense) =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        )
      }
    </div>
  )
}