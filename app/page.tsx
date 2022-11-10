"use client";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, mutate, isValidating } = useSWR<{ date: string }>(
    "/api/now",
    fetcher
  );
  const doThisAfterMutating = () => {
    const obj = { isValidating, date: data?.date ?? "no data" };
    alert(JSON.stringify(obj));
  };
  async function handleMutate() {
    await mutate();
    doThisAfterMutating();
  }
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <div>Now: {data.date}</div>
      <button onClick={handleMutate}>Refresh</button>
    </div>
  );
}
