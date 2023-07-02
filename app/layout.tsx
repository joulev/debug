import { headers } from "next/headers";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = headers().get("x-pathname");
  console.log("Computing layout with incoming pathname:", pathname);
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

export const dynamic = "force-dynamic";
