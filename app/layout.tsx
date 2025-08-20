import localFont from "next/font/local";

const font = localFont({
  src: [{ path: "./regular.woff2", weight: "normal", style: "normal" }],
  display: "swap",
  declarations: [{ prop: "size-adjust", value: "90%" }],
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>{children}</body>
    </html>
  );
}
