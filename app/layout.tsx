export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL(
    "https://debug-git-nextjs-og-image-refresh-on-vercel-joulev-proj.vercel.app"
  ),
};
