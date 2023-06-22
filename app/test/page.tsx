import { Metadata } from "next";
import Script from "next/script";

export default function Page() {
  return <Script>{`window.location = "/"`}</Script>;
}

export const metadata: Metadata = {
  title: "Test page",
  description: "This is a test page",
};
