import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "./SummaryForm";

describe("checkbox", () => {
  test("checkbox is unchecked by default", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", { name: /I agree to/i });
    expect(checkbox).not.toBeChecked();
  });

  test("checking checkbox enables button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", { name: /I agree to/i });
    const button = screen.getByRole("button", { name: /confirm order/i });

    fireEvent.click(checkbox);

    expect(button).toBeEnabled();
  });

  test("unchecking checkbox disables button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", { name: /I agree to/i });
    const button = screen.getByRole("button", { name: /confirm order/i });

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(button).toBeDisabled();
  });
});
