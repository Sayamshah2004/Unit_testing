import { describe, it, expect } from "vitest";
import { calculateTotal } from "./CalculateTotal";

describe("CalculateTotal", () => {
  it("calculates total with tax correctly", () => {
    expect(calculateTotal(100, 0.2)).toBe("120.00");
  });
});
