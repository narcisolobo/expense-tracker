import { Button } from "@mantine/core";

function AddExpenseButton() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: 'violet', to: 'indigo' }}>
      Add New Expense
    </Button>
  );
}
export default AddExpenseButton;
