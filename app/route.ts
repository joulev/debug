import { writeFileSync } from "fs";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  try {
    writeFileSync("/tmp/helloworld.txt", "hello world", "utf8");
    return new Response("Ok!");
  } catch (e) {
    return new Response(String(e), { status: 500 });
  }
}
