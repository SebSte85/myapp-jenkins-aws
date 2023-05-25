// Write one or more tests for 100% code coverage of the component

import React from "react";
import { render, screen } from "@testing-library/react";
import Submenu from "./Submenu";

describe("Submenu", () => {
  test("renders Submenu component", () => {
    render(<Submenu />);
    screen.debug();
  });
});
