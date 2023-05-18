import Input from "./input";

async function search(query: string) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return `You searched for ${query}`;
}

async function SearchResult({ query }: { query: string | null }) {
  if (!query) return <div>No query provided</div>;
  const result = await search(query);
  return <div>{result}</div>;
}

export default async function Page({ searchParams }: { searchParams: { q: string | null }}) {
  return (
    <div>
      <Input query={searchParams.q} />
      {/* @ts-expect-error ts dumdum */}
      <SearchResult query={searchParams.q} />
    </div>
  );
}
