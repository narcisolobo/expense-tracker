import { Card, Table } from '@mantine/core';
import ExpenseRow from './ExpenseRow';

const alignRight = {
  textAlign: 'right'
}

function Expenses({ expenses }) {
  return (
    <Card padding='md' withBorder>
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
