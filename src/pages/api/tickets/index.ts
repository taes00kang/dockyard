import type { NextApiRequest, NextApiResponse } from "next";
import tickets from "../../../data/tickets.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(tickets);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
