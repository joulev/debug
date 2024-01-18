import Link from "next/link";

export default function NotFound() {
  return (
    <p>
      Not found. <Link href="/">Go back to home.</Link>
    </p>
  );
}
