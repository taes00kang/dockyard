import { render, screen, queryByAttribute } from "@testing-library/react";
import Section1 from "../components/sections/sec_1/Section1";
import "@testing-library/jest-dom";
import { ReduxProvider } from "../redux";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <ReduxProvider>
        <Section1 />
      </ReduxProvider>
    );

    const heading = screen.getByTestId("intro-heading-top")
    expect(heading).toBeInTheDocument()
  });
});
