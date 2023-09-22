import { RefreshButton } from "./refresh";

export default async function Page() {
  const res = await fetch("https://generate-secret.vercel.app/16");
  const value = await res.text();
  return (
    <div>
      <div>Value = {value}</div>
      <RefreshButton />
    </div>
  );
}

export const revalidate = 0;
