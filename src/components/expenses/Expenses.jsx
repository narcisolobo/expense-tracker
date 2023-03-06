import { Card, Table } from '@mantine/core';
import ExpenseRow from './ExpenseRow';
import { useState } from 'react';
import '../../css/Card.css'
import ExpenseFilter from './ExpenseFilter';

const alignRight = {
  textAlign: 'right'
}

function Expenses({ expenses }) {
  const [yearFilter, setYearFilter] = useState(2020);

  return (
    <Card padding='md' className='ciso-card'>
      <ExpenseFilter yearFilter={yearFilter} setYearFilter={setYearFilter} />
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Date:</th>
            <th>Title:</th>
            <th style={alignRight}>Amount:</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseRow
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
export default Expenses;
