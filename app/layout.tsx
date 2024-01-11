import "./globals.css";

import localFont from "next/font/local";

const inter = localFont({
  src: "./InterVariable.woff2",
  display: "swap",
  variable: "--inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} font-sans text-slate-700`}>
        {children}
      </body>
    </html>
  );
}
