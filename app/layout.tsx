import Input from "./input";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Input />
        {children}
      </body>
    </html>
  );
}
