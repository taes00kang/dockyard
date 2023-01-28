import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await fetch(
      "https://dd2i0p7y69k4h.cloudfront.net/api/data.json"
    ).then((res) => res.json());
    res.status(200).json(data);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
