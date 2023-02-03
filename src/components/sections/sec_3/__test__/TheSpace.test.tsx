/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { screen, render, waitFor, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

import TheSpace from "../TheSpace";

const getButtons = () => {
  const button1 = screen.getByTestId(`roller-button-1`);
  const button2 = screen.getByTestId(`roller-button-2`);
  const button3 = screen.getByTestId(`roller-button-3`);

  return { button1, button2, button3 };
};

describe("The Space", () => {
  beforeEach(() => {
    render(<TheSpace />);
  });
  it("renders headings.", async () => {
    expect(screen.getByText("THE")).toBeInTheDocument();
    expect(screen.getByText("SPACE")).toBeInTheDocument();
  });

  it("renders roller buttons.", async () => {
    const { button1, button2, button3 } = getButtons();

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
  });
  it("returns transition Y value for each button.", async () => {
    const { button1, button2, button3 } = getButtons();

    await waitFor(() => expect(button1.style.transform).toBe("none"), {
      timeout: 2000,
    });
    await waitFor(
      () => expect(button2.style.transform).toContain("translateY(-6vw)"),
      { timeout: 2000 }
    );
    await waitFor(
      () => expect(button3.style.transform).toContain("translateY(-12vw)"),
      { timeout: 2000 }
    );
  });

  describe("when button 2 is clicked", () => {
    beforeEach(async () => {
      const { button2 } = getButtons();

      await act(async () => {
        await user.click(button2);
      });
    });
    it("returns transition Y value for button1 and button2.", async () => {
      const { button1, button2 } = getButtons();

      await waitFor(
        () => expect(button1.style.transform).toContain("translateY(-6vw)"),
        {
          timeout: 2000,
        }
      );
      await waitFor(
        () => expect(button2.style.transform).toContain("translateY(0)"),
        {
          timeout: 2000,
        }
      );
    });
    it("adds class name 'fill' to slide container.", async () => {
      const container = screen.getByTestId("slide-container");
      expect(container).toHaveClass("fill");
    });
  });
  describe("when button 3 is clicked", () => {
    beforeEach(async () => {
      const { button3 } = getButtons();

      await act(async () => {
        await user.click(button3);
      });
    });
    it("returns transition Y value for button1 and button3.", async () => {
      const { button1, button3 } = getButtons();

      await waitFor(
        () => expect(button1.style.transform).toContain("translateY(-12vw)"),
        {
          timeout: 2000,
        }
      );
      await waitFor(
        () => expect(button3.style.transform).toContain("translateY(0)"),
        {
          timeout: 2000,
        }
      );
    });
  });
});
