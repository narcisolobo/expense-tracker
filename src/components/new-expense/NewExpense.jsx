import { Card } from '@mantine/core';
import ExpenseForm from './ExpenseForm';
import '../../css/Card.css';
import { useState } from 'react';
import AddExpenseButton from '../new-expense/AddExpenseButton';

function NewExpense(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleIsFormVisible = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Card padding="md" className="ciso-card">
      {isFormVisible ? (
        <ExpenseForm {...props} toggle={toggleIsFormVisible} />
      ) : (
        <AddExpenseButton toggle={toggleIsFormVisible} />
      )}
    </Card>
  );
}
export default NewExpense;
