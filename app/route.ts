import fs from "fs/promises";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  try {
    await fs.writeFile("/tmp/hello.txt", "hello world");
    return new Response("Ok!");
  } catch (e) {
    return new Response(String(e), { status: 500 });
  }
}
