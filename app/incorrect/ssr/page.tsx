import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      You are in /incorrect/ssr.{" "}
      <Link href="/incorrect">Go back to /incorrect</Link>
    </div>
  );
}

export const dynamic = "force-dynamic";
