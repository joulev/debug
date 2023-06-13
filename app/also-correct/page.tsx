import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <Link href="/also-correct/ssr">Go to /also-correct/ssr</Link>;
}

export const dynamic = "force-dynamic";
