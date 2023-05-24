// Write one or more tests for 100% code coverage of the component

import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
    screen.debug();
  });
});