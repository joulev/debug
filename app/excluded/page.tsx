import Link from "next/link";

export default function Page() {
  return (
    <p>
      This page is excluded from the main layout.{" "}
      <Link href="/">Go back to home.</Link>
    </p>
  );
}
