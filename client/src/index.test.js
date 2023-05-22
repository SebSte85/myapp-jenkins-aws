// Create simple test to check if the App component renders correctly

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Button from "./components/Button";

test("renders app component", () => {
  render(<App />);
  const appElement = screen.getByText(/click me/i);
  expect(appElement).toBeInTheDocument();
});

test("renders button component", () => {
  render(<Button />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
