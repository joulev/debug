export default function Page() {
  return <div>Rendered on Cloudflare Pages at {new Date().toISOString()}</div>;
}

export const runtime = "edge";
