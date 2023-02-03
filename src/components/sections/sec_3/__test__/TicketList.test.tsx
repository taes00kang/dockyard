/* eslint-disable import/no-extraneous-dependencies */
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ReduxProvider } from "../../../../redux";
import TicketList from "../TicketList";

describe("TicketList", () => {
  it("fetches and displays ticket list.", async () => {
    render(
      <ReduxProvider>
        <TicketList />
      </ReduxProvider>
    );
    await waitFor(() =>
      expect(screen.getByTestId("ticket-list")).toBeInTheDocument()
    );
  });
});
