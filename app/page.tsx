import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>
        <Link href="/correct">Go to /correct</Link>
      </div>
      <div>
        <Link href="/also-correct">Go to /also-correct</Link>
      </div>
      <div>
        <Link href="/incorrect">Go to /incorrect</Link>
      </div>
    </div>
  );
}
