"use client";

import Link from "next/link";

export default function Error() {
  return (
    <p>
      Something went wrong. <Link href="/">Go back to home.</Link>
    </p>
  );
}
