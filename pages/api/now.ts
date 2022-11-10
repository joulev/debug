import type { NextApiResponse } from "next";

export default async function handler(_: any, res: NextApiResponse) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.status(200).json({ date: new Date().toISOString() });
}
