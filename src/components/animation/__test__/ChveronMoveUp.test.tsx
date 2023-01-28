import {
  render,
  screen,
  fireEvent,
  getByAltText,
  getByTestId,
} from "@testing-library/react";
import ChevronMoveUp from "../ChevronMoveUp";
import "@testing-library/jest-dom";
import { useInView } from 'framer-motion'


describe("ChevronMoveUp images", () => {
  it("renders small chevron image", () => {
    render(<ChevronMoveUp type="small" duration={5} repeatDelay={1} />);

    const chevron = screen.getByAltText("chevron up small");

    expect(chevron).toBeInTheDocument();
  });
  it("renders large chevron image", () => {
    render(<ChevronMoveUp type="large" duration={5} repeatDelay={1} />);

    const chevron = screen.getByAltText("chevron up large");

    expect(chevron).toBeInTheDocument();
  });
});