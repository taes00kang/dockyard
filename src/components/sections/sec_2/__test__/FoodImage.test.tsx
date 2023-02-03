/* eslint-disable import/no-named-as-default */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { prefixImageUrl } from "../../../../constant";
import FoodImage from "../FoodImage";

describe("Food image", () => {
  it("renders front food image.", async () => {
    render(
      <FoodImage
        alt="food image 1"
        srcSet={["food-1-1.jpeg", "food-1-2.jpeg"]}
      />
    );
    const frontImageSrc = screen
      .getByAltText("food image 1 front")
      .getAttribute("src");
    const backImageSrc = screen
      .getByAltText("food image 1 back")
      .getAttribute("src");

    expect(frontImageSrc).toContain(
      encodeURIComponent(`${prefixImageUrl}food-1-1.jpeg`)
    );
    expect(backImageSrc).toContain(
      encodeURIComponent(`${prefixImageUrl}food-1-2.jpeg`)
    );
  });
});
