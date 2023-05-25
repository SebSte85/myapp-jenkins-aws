// Write one or more tests for 100% code coverage of the component

import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  test("renders Sidebar component", () => {
    render(<Sidebar />);
    screen.debug();
  });
});
