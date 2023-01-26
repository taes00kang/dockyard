import { NextApiRequest, NextApiResponse } from "next";
import tickets from "../../../data/tickets.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ticketId } = req.query;

  if (typeof ticketId === "string") {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (ticket) {
      res.status(200).json({ ticket });
    }
  } else {
    res.status(404).json({ message: "Ticket not found" });
  }
}
