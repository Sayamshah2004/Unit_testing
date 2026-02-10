import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InvoiceDetails } from "./InvoiceDetails";

describe("InvoiceDetails", () => {
  const defaultProps = {
    invoiceNumber: "I100",
    customerName: "Test Inc",
    amount: 95.2, // ✅ number (NOT string)
    dueDate: "2 Oct 2025",
    taxRate: 0.2,
    status: "paid",
  };

  it("renders all invoice fields correctly", () => {
    render(<InvoiceDetails {...defaultProps} />);

    expect(screen.getByText("#Invoice: I100")).toBeInTheDocument();
  });
  it("adds class 'paid' when invoice is paid", () => {
    const { container } = render(<InvoiceDetails {...defaultProps} />);
    const statusElement = container.querySelector(".status");

    expect(statusElement).toBeInTheDocument();
    expect(statusElement.classList.contains("paid")).toBe(true);
  });
  it("renders all invoice fields correctly", () => {
    render(<InvoiceDetails {...defaultProps} />);

    expect(screen.getByText("#Invoice: I100")).toBeInTheDocument();
  });
  it("adds class 'overdue' when invoice is overdue", () => {
    const modifiedProps = { ...defaultProps, status: "overdue" };
    const { container } = render(<InvoiceDetails {...modifiedProps} />);
    const statusElement = container.querySelector(".status");

    expect(statusElement).toBeInTheDocument();
    expect(statusElement.classList.contains("overdue")).toBe(true);
  });
});
