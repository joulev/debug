export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <p>This part is from the root layout</p>
        <p>{children}</p>
        <p>
          not-found.tsx and error.tsx are not inside the (main) group, so do not
          inherit the main layout. If you want them to have the main layout too,
          you may need to replicate the layout in these pages. (not-found.tsx
          must be at the very root, because app/(main)/not-found.tsx doesn't
          catch global 404.)
        </p>
      </body>
    </html>
  );
}
