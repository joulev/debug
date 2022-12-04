import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/dynamic">/dynamic</Link>
          <Link href="/dynamic/foo">/dynamic/foo</Link>
          <Link href="/dynamic/bar">/dynamic/bar</Link>
        </nav>
      </body>
    </html>
  );
}
