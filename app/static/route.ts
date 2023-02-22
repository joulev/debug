export function GET() {
  return new Response(new Date().toISOString());
}

// The issue persists even with the following uncommented
// export const dynamic = "force-static";
