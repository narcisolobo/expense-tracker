import { Card, Flex, Title } from '@mantine/core';
import { dateFormatter } from '../utils/formatters';

function ExpenseDate({ date }) {
  const { month, day, year } = dateFormatter(date);
  return (
    <Card
      padding="sm"
      radius="md"
      sx={{ border: '1px solid grey', minWidth: '100px' }}>
      <Flex direction="column" justify="center" align="center">
        <strong>{month}</strong>
        <small>{year}</small>
        <Title order={2}>{day}</Title>
      </Flex>
    </Card>
  );
}
export default ExpenseDate;
