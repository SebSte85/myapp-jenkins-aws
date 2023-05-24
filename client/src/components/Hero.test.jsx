// Write one or more tests for 100% code coverage of the component

import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  test("renders Hero component", () => {
    render(<Hero />);
    screen.debug();
  });
});
