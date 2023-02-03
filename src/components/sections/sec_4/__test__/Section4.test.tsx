import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Section4 from "../Section4";

describe("Section 4", () => {
  beforeEach(() => {
    render(<Section4 />);
  });
  it("renders headings.", () => {
    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(2);

    expect(headings[0]).toHaveTextContent("Where to");
    expect(headings[1]).toHaveTextContent("Find us");
  });
  it("renders map image.", () => {
    const mapImage = screen.getByAltText("location map");

    expect(mapImage).toBeInTheDocument();
  });
});
