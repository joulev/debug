import { NextApiHandler } from "next";

const handler: NextApiHandler = async (_, res) => {
  res.status(200).json({ message: "Hello World" });
};

export default handler;
