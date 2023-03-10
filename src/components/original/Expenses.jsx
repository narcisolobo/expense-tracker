import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [isFiltered, setIsFiltered] = useState(false);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setIsFiltered(true);
  };

  const filterExpenses = (year) => {
    const expenses = props.items;
    const filteredExpenses = isFiltered
      ? expenses.filter((expense) => expense.date.getFullYear() === year)
      : expenses;
    return filteredExpenses;
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.filterExpenses().map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
