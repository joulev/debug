import { cookies } from "next/headers";

export function GET() {
  cookies().set("test", "hello world");
  return new Response("Hello World");
}

export const runtime = "edge";
