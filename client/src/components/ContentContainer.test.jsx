// Write one or more tests for 100% code coverage of the component

import React from "react";
import { render, screen } from "@testing-library/react";
import ContentContainer from "./ContentContainer";

describe("ContentContainer", () => {
  test("renders ContentContainer component", () => {
    render(<ContentContainer />);
    screen.debug();
  });
});
