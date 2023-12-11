import { db } from "~/lib/db";
import { aTableThatDoesntExist } from "~/lib/schema";

export default async function Page() {
  const data = await db.select().from(aTableThatDoesntExist);
  return <div>{JSON.stringify(data)}</div>;
}
