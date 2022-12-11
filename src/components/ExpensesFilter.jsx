import React from 'react';


const ExpensesFilter = (props) => {
  const expensesFilterHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div>
      <label> Filter by year: </label>
      <select>
        <option value='2019'> 2019 </option>
        <option value='2020'> 2020 </option>
        <option value='2021'> 2021 </option>
        <option value='2022'> 2022 </option>
        <option value='2023'> 2023 </option>
      </select>
    </div>
  );
}

export default ExpensesFilter;