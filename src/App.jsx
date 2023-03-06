import { useState } from 'react';
import { Container } from '@mantine/core';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/new-expense/NewExpense';
import { initialExpenses } from './data/expenses';

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <Container>
      <h1>Expense Tracker</h1>
      <p>A way to track your expenses.</p>
      <NewExpense setExpenses={setExpenses} />
      {expenses.length > 0 && <Expenses expenses={expenses} />}
    </Container>
  );
}
export default App;
