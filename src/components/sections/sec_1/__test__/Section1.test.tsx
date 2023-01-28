import { render, screen, fireEvent } from "@testing-library/react";
import Section1 from "../Section1";
import "@testing-library/jest-dom";
import { ReduxProvider } from "../../../../redux";

describe("Section1", () => {
  const introHeadingPosition = ["top", "middle", "bottom"];

  beforeEach(() => {
    render(
      <ReduxProvider>
        <Section1 />
      </ReduxProvider>
    );
  });
  it("renders intro heading images.", () => {
    const headings = introHeadingPosition.map((pos) =>
      screen.getByAltText(`intro heading ${pos}`)
    );

    headings.map((heading) => expect(heading).toBeInTheDocument());
  });

  it("moves heading boxs along the x-axis.", () => {
    const headings = introHeadingPosition.map((pos) =>
      screen.getByTestId(`intro-heading-${pos}`)
    );

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    headings.map((heading, index) => {
      // headings[1] = heading with "middle" position
      if (index === 1) {
        // animate to right direction.
        return expect(heading.style.transform).toContain("translateX(20%)");
      }
      // animate to left direction.
      return expect(heading.style.transform).toContain("translateX(-20%)");
    });
  });

  it("renders 'free cocktail here' button.", () => {
    const button = screen.getByRole("button", { name: "free cocktail here" });
    expect(button).toBeInTheDocument();
  });

  it("renders headings in Section 1-2", () => {
    const heading1 = screen.getByTestId("sec1-2_heading_1");
    const heading2 = screen.queryAllByTestId("sec1-2_heading_2");

    expect(heading1).toBeInTheDocument();
    heading2.map((heading) => expect(heading).toBeInTheDocument());
  });
});
