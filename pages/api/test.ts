import { NextApiResponse, NextApiRequest } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.redirect(307, "/transactions/hello");
}
