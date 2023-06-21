async function search(query: string | null) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!query) return "No query provided";
  return `You searched for ${query}`;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { q: string | null };
}) {
  const result = await search(searchParams.q);
  return <div>{result}</div>;
}
