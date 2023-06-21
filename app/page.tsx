import { Suspense } from "react";
import Loading from "./loading";

async function search(query: string | null) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!query) return "No query provided";
  return `You searched for ${query}`;
}

async function Search({ query }: { query: string | null }) {
  const result = await search(query);
  return <div>{result}</div>;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { q: string | null };
}) {
  return (
    <Suspense fallback={<Loading />} key={searchParams.q || ""}>
      <Search query={searchParams.q} />
    </Suspense>
  );
}
