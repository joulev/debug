import "./globals.css";
import "katex/dist/katex.min.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
