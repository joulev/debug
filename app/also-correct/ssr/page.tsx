import Link from "next/link";
import { Suspense } from "react";
import CustomLoading from "./custom-loading";

async function PageButSlow() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      You are in /also-correct/ssr.{" "}
      <Link href="/also-correct">Go back to /also-correct</Link>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<CustomLoading />}>
      <PageButSlow />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
