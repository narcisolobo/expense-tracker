import { Card } from '@mantine/core';
import ExpenseForm from './ExpenseForm';
import '../../css/Card.css'

function NewExpense(props) {
  return (
    <Card
      padding="md"
      className='ciso-card'>
      <ExpenseForm {...props} />
    </Card>
  );
}
export default NewExpense;
