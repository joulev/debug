export function GET() {
  return new Response(new Date().toISOString());
}
