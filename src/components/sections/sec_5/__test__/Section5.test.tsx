import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Section5 from "../Section5";

describe("Section 5", () => {
  beforeEach(() => {
    render(<Section5 />);
  });
  it("renders link text.", () => {
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute(
      "href",
      "https://www.instagram.com/dockyardsocial/"
    );
  });
  it("renders email input.", () => {
    const textInput = screen.getByPlaceholderText("Your email");

    expect(textInput).toBeInTheDocument();
  });
  it("renders submit button.", () => {
    const submitButton = screen.getByRole("button", { name: "SUBMIT" });

    expect(submitButton).toBeInTheDocument();
  });
});
