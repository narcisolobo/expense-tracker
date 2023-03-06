import { currencyFormatter, dateFormatter } from '../../utils/formatters';

const alignRight = {
  textAlign: 'right',
};

function ExpenseRow({ date, title, amount }) {
  return (
    <tr>
      <td>{dateFormatter(date)}</td>
      <td>{title}</td>
      <td style={alignRight}>{currencyFormatter(amount)}</td>
    </tr>
  );
}
export default ExpenseRow;
