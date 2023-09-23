export default async function Page({
  searchParams,
}: {
  searchParams: { page: string | undefined };
}) {
  console.log("this is run");
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(
    `https://api.punkapi.com/v2/beers?page=${searchParams.page ?? 1}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!res.ok) {
    throw new Error(res.status + res.statusText);
  }

  const beers: { id: string; name: string }[] = await res.json();

  return (
    <ul>
      {beers.map((beer) => (
        <li key={beer.id}>{beer.name}</li>
      ))}
    </ul>
  );
}
