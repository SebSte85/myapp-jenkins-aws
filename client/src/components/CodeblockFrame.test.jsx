// Write one or more tests for 100% code coverage of the component

import React from "react";
import { render, screen } from "@testing-library/react";
import CodeblockFrame from "./CodeblockFrame";

describe("CodeblockFrame", () => {
  test("renders CodeblockFrame component", () => {
    render(<CodeblockFrame />);
    screen.debug();
  });
});
