import { Grid, Select } from '@mantine/core';
import { years } from '../../data/expenses';

function ExpenseFilter({ yearFilter, setYearFilter }) {
  return (
    <Grid columns={3}>
      <Grid.Col span={1} offset={2}>
        <form>
          <Select
            data={years}
            label="Filter by Year:"
            value={yearFilter}
            onChange={setYearFilter}
            placeholder="Select Year"
          />
        </form>
      </Grid.Col>
    </Grid>
  );
}
export default ExpenseFilter;
