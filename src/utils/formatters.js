import { format } from 'date-fns';

export function currencyFormatter(val) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(val);
}

export function dateFormatter(date = new Date()) {
  return format(date, 'MM-dd-yyyy');
}
