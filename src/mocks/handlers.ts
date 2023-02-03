/* eslint-disable import/no-extraneous-dependencies */
import { rest } from "msw";
import { ITicket } from "../interfaces/index";

export const handlers = [
  rest.get("/api/tickets", (req, res, ctx) => {
    const mockData: ITicket[] = [
      {
        id: "9e9e9d6-00fd-4935-859b-9c44d85741fb",
        type: "weekend",
        title: "FEBRUARY TICKETS",
        price: 5,
        month: 2,
      },
      {
        id: "28c581f5-08b8-420a-8255-b624e3343f09",
        type: "voucher",
        title: "gift voucher",
        price: 25,
      },
      {
        id: "44798629-3cca-4ca0-8668-36503f04d310",
        type: "event",
        title: "dockyard presents: Valentine's Day dance",
        price: 8,
        month: 2,
        day: 14,
      },
    ];
    return res(ctx.status(200), ctx.json(mockData));
  }),
];
