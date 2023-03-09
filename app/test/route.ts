export function GET() {
  return new Response("hello world", {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
