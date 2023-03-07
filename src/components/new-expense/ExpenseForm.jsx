import { useEffect, useRef, useState } from 'react';
import { Button, Flex, Grid, NumberInput, TextInput } from '@mantine/core';
import { CurrencyDollar } from 'react-bootstrap-icons';
import { DateInput } from '@mantine/dates';
import { v4 as uuidv4 } from 'uuid';

function ExpenseForm({ setExpenses, toggle }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const titleRef = useRef(null);

  useEffect(() => titleRef.current.focus(), []);

  function submitHandler(e) {
    e.preventDefault();
    const expense = { id: uuidv4(), title, amount, date };
    setExpenses((prev) => {
      return [...prev, expense];
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <Grid columns={3} mb={8}>
        <Grid.Col span={1}>
          <TextInput
            name="title"
            label="Title:"
            placeholder="Enter title"
            ref={titleRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid.Col>
        <Grid.Col span={1}>
          <NumberInput
            min={0}
            step={0.01}
            precision={2}
            name="amount"
            label="Price:"
            value={amount}
            onChange={setAmount}
            icon={<CurrencyDollar />}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
                ? `${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                : ''
            }
          />
        </Grid.Col>
        <Grid.Col span={1}>
          <DateInput
            value={date}
            onChange={setDate}
            label="Date input"
            placeholder="Date input"
            maw={400}
            minDate={new Date('2020-01-01')}
            maxDate={new Date('2025-12-31')}
            mx="auto"
          />
        </Grid.Col>
      </Grid>
      <Flex justify="flex-end" align="center">
        <Button
          type="reset"
          variant="gradient"
          onClick={toggle}
          gradient={{ from: 'darkgreen', to: 'green' }}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="gradient"
          gradient={{ from: 'violet', to: 'indigo' }}>
          Enter Expense
        </Button>
      </Flex>
    </form>
  );
}
export default ExpenseForm;
