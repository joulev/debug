import clsx from "clsx";
import { Nunito, Ubuntu } from "@next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu",
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={clsx(nunito.variable, ubuntu.variable)}
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
