// import { VercelToolbar } from "@vercel/toolbar/next";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        {/* <VercelToolbar /> */}
      </body>
    </html>
  );
}
