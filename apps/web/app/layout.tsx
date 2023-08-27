import { VercelToolbar } from "@vercel/toolbar/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        {children}
        <VercelToolbar />
      </body>
    </html>
  );
}
