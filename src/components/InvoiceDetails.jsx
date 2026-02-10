import { calculateTotal } from "../utils/CalculateTotal";

export function InvoiceDetails({
  invoiceNumber,
  customerName,
  amount,
  dueDate,
  taxRate,
  status,
}) {
  // Ensure amount is always a number
  const numericAmount = Number(amount);

  const totalWithTax = calculateTotal(amount, taxRate);

  return (
    <div>
      <h2>#Invoice: {invoiceNumber}</h2>

      <p>Customer: {customerName}</p>

      <p>Amount: ${numericAmount.toFixed(2)}</p>

      <p>Tax Rate: {taxRate * 100}%</p>

      <p>Total: ${totalWithTax}</p>

      <p>
        Status: <span className={`status ${status}`}>{status}</span>
      </p>

      <p>Due Date: {dueDate}</p>
    </div>
  );
}
