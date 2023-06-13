import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      You are in /correct/ssr. <Link href="/correct">Go back to /correct</Link>
    </div>
  );
}

export const dynamic = "force-dynamic";
