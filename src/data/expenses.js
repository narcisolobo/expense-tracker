import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {
    id: uuidv4(),
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: uuidv4(),
    title: 'New Television',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: uuidv4(),
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: uuidv4(),
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const years = [
  {
    value: 2020,
    label: '2020',
  },
  {
    value: 2021,
    label: '2021',
  },
  {
    value: 2022,
    label: '2022',
  },
  {
    value: 2023,
    label: '2023',
  },
  {
    value: 2024,
    label: '2024',
  },
  {
    value: 2025,
    label: '2025',
  },
];

export { initialExpenses, years };
