// Write one or more tests for 100% code coverage of the component

import React from "react";
import { render, screen } from "@testing-library/react";
import MainSection from "./MainSection";

describe("MainSection", () => {
  test("renders MainSection component", () => {
    render(<MainSection />);
    screen.debug();
  });
});
