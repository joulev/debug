import { Hanken_Grotesk } from "next/font/google";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={font.style}>
        <div>I am from the layout</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
