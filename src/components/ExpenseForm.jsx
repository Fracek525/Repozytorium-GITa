import React, { useState } from 'react';


const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [enteredInput, setEnteredInput] = useState({
  //   enteredTitle: '',
  //   enteredPrice: '',
  //   enteredDate: ''
  // }
  // );

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log("ok title");
  }

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
    console.log("ok price");
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log("ok date");
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate)
    };

    console.log(expenseData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title: </label>
        <input type="text" onChange={titleChangeHandler} />
      </div>

      <div>
        <label>Date: </label>
        <input type="date" onChange={dateChangeHandler} />
      </div>

      <div>
        <label>Price: </label>
        <input type="number" min="0.01" step="0.01" onChange={priceChangeHandler} />
      </div>

      <button >Kliknij mnie</button>

    </form>
  )
}

export default ExpenseForm;