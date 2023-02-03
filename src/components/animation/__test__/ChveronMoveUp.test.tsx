/* eslint-disable import/no-named-as-default */
import { render, waitFor } from "@testing-library/react";
import ChevronMoveUp from "../ChevronMoveUp";
import "@testing-library/jest-dom";

describe("ChevronMoveUp images", () => {
  it("renders small chevron image", async () => {
    render(<ChevronMoveUp type="small" duration={5} repeatDelay={1} />);

    const chevron = document.querySelector("img") as HTMLImageElement;

    waitFor(() =>
      expect(chevron.getAttribute("src")).toEqual(
        "https://dd2i0p7y69k4h.cloudfront.net/images/home/chevron-up-mini.svg"
      )
    );
  });
  it("renders large chevron image", async () => {
    render(<ChevronMoveUp type="large" duration={5} repeatDelay={1} />);

    const chevron = document.querySelector("img") as HTMLImageElement;

    expect(chevron.getAttribute("src")).toEqual(
      "https://dd2i0p7y69k4h.cloudfront.net/images/home/chevron-up.svg"
    );
  });
});
