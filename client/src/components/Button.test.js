import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button component", () => {
  render(<Button />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
