import "./App.css";
import { InvoiceDetails } from "./components/InvoiceDetails";
function App() {
  return (
    <>
      <InvoiceDetails
        invoiceNumber={100}
        customerName={"Sayam Shah"}
        amount={250.44}
        dueDate={"10 feb 2026"}
        taxRate={0.19}
        status={"overdue"}
      ></InvoiceDetails>
    </>
  );
}

export default App;
