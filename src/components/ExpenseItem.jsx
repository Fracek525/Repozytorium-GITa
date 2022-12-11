import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  {/*
  const month = props.date.toLocaleString('pl-PL', { month: 'long' });
  const day = props.date.toLocaleString('pl-PL', { day: '2-digit' });
  const year = props.date.getFullYear();
  */}

const [title, setTitle] = useState(props.title);

// let title = props.title;
const clickHandler = () => {
  setTitle("NOW UPDATE");
  console.log(title);
}

  return (
    <div className="container">
      <div>{title}</div>
      <div className="date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="description"></div>
      <div className="prize">{props.price} PLN</div>
      <button onClick={clickHandler}>Zmieniacz tytulu</button>
    </div>
  );
}

export default ExpenseItem;