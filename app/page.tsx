import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export default async function Page() {
  const data = await sql`SELECT * FROM a_table_that_does_not_exist`;
  return <div>{JSON.stringify(data)}</div>;
}
