import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <Link href="/correct/ssr">Go to /correct/ssr</Link>;
}

export const dynamic = "force-dynamic";
