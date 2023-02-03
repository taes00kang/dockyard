/* eslint-disable import/no-named-as-default */
import { render, screen } from "@testing-library/react";
import Section2 from "../Section2";
import { prefixImageUrl } from "../../../../constant";
import "@testing-library/jest-dom";

describe("Section 2", () => {
  beforeEach(() => {
    render(<Section2 />);
  });

  it("renders 'free cocktail here' button", () => {
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("free cocktail here");
  });

  it("renders laughing lady image.", async () => {
    const image = screen.getByAltText("laughing lady");
    const imageSrc = image.getAttribute("src");

    expect(imageSrc).toContain(
      encodeURIComponent(`${prefixImageUrl}laughing-lady.jpeg`)
    );
  });
});
