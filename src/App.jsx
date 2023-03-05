import { Container } from "@mantine/core"
import Expenses from "./components/Expenses"
import expenses from "./data/expenses"

function App() {
  return (
    <Container>
      <h1>Expense Tracker</h1>
      <p>A way to track your expenses.</p>
      <Expenses expenses={expenses} />
    </Container>
  )
}
export default App