import { Suspense } from "react";
import { Search } from "./search";

async function Data({ query }: { query?: string }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (!query) return <div>You didn't search for a query</div>;
  return <div>You searched for {query}</div>;
}

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const query = Array.isArray(searchParams.query)
    ? searchParams.query[0]
    : searchParams.query;
  return (
    <>
      <Search />
      <Suspense fallback={<div>Loading...</div>} key={query}>
        <Data query={query} />
      </Suspense>
    </>
  );
}
