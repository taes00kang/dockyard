/* eslint-disable import/no-named-as-default */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ReduxProvider } from "../../../../redux";
import Ticket from "../Ticket";

describe("Ticket component", () => {
  describe("Ticket with regular types(weekend of event)", () => {
    beforeEach(() => {
      render(
        <ReduxProvider>
          <Ticket
            id="random-ticket-id"
            type="event"
            title="testing event title"
            price={10}
            month={3}
            day={23}
          />
        </ReduxProvider>
      );
    });

    it("renders ticket title.", () => {
      const title = screen.getByText("testing event title");

      expect(title).toBeInTheDocument();
    });

    it("renders ticket price.", () => {
      const price = screen.getByText("$10.00");

      expect(price).toBeInTheDocument();
    });

    it("renders ticket month and date.", () => {
      const day = screen.getByText("23rd march");

      expect(day).toBeInTheDocument();
    });

    it("renders add to cart button", () => {
      const button = screen.getByRole("button");

      expect(button).toHaveTextContent("Add to Cart");
    });

    it("renders ticket type", () => {
      const text = screen.getByText("Entry");

      expect(text).toBeInTheDocument();
    });
  });
  describe("Ticket with voucher type", () => {
    beforeEach(() => {
      render(
        <ReduxProvider>
          <Ticket
            id="random-voucher-ticket-id"
            type="voucher"
            title="gift voucher"
            price={25}
          />
        </ReduxProvider>
      );
    });

    it("renders ticket title.", () => {
      const title = screen.getByText("gift voucher");

      expect(title).toBeInTheDocument();
    });

    it("renders ticket price.", () => {
      const price = screen.getByText("$25.00");

      expect(price).toBeInTheDocument();
    });

    it("renders add to cart button", () => {
      const button = screen.getByRole("button");

      expect(button).toHaveTextContent("Add to Cart");
    });

    it("renders ticket type", () => {
      const text = screen.getByText("Voucher");

      expect(text).toBeInTheDocument();
    });
  });
});
