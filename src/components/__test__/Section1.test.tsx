import { render, screen, fireEvent, waitFor, within, findByTestId } from "@testing-library/react";
import Section1 from "../sections/sec_1/Section1";
import "@testing-library/jest-dom";
import { ReduxProvider } from "../../redux";


describe("Section1", () => {
  beforeEach(() => {
    render(
      <ReduxProvider>
          <Section1 />
      </ReduxProvider>
    );
  });
  it("renders intro heading images.", () => {
    const headingTop = screen.getByAltText("intro heading top");
    const headingMiddle = screen.getByAltText("intro heading middle");
    const headingBottom = screen.getByAltText("intro heading bottom");

    expect(headingTop).toBeInTheDocument();
    expect(headingMiddle).toBeInTheDocument();
    expect(headingBottom).toBeInTheDocument();
  });

  it("moves heading boxs along the x-axis.", () => {
    const headingTop = screen.getByTestId("intro-heading-top");
    const headingMiddle = screen.getByTestId("intro-heading-middle");
    const headingBottom = screen.getByTestId("intro-heading-bottom");

    fireEvent.scroll(window, { target: { scrollY: 100 } })

    expect(headingTop.style.transform).toContain("translateX(-20%)");
    expect(headingMiddle.style.transform).toContain("translateX(20%)");
    expect(headingBottom.style.transform).toContain("translateX(-20%)");
  });

  it("renders 'free cocktail here' button.", () => {
    const button = screen.getByRole("button", { name: "free cocktail here"})
    expect(button).toBeInTheDocument()
  }) 

  it("scrolls to the ticketlist, when 'free cocktail here' button is clicked", async () => {
    const button = screen.getByRole("button", { name: "free cocktail here"})
    const div = screen.findByTestId("list-weekend")

    const rect = (await div).getBoundingClientRect()
//   expect(rect.top).toBeGreaterThanOrEqual(0)
//   expect(rect.left).toBeGreaterThanOrEqual(0)
//   expect(rect.bottom).toBeLessThanOrEqual(window.innerHeight)
//   expect(rect.right).toBeLessThanOrEqual(window.innerWidth)
    waitFor(() => console.log(rect.top)
    )
    // expect(div.getBoundingClientRect().top).toBeLessThan(0);
    
  })

  
});
