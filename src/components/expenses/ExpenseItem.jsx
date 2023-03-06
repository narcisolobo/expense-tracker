import { Card, Flex, Title } from '@mantine/core';
import { currencyFormatter } from '../utils/formatters';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ date, title, amount }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      sx={{ backgroundColor: 'rgb(50 50 50)' }}>
      <Flex gap="md" justify="flex-start" align="center">
        <ExpenseDate date={date} />
        <Flex gap="md" justify="space-between" align="center" sx={{ flex: 1 }}>
          <Title order={1}>{title}</Title>
          <Card
            padding="sm"
            radius="md"
            withBorder
            sx={{ backgroundColor: 'darkviolet' }}>
            <Title order={1}>{currencyFormatter(amount)}</Title>
          </Card>
        </Flex>
      </Flex>
    </Card>
  );
}
export default ExpenseItem;
