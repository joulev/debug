import { Refresh } from "./refresh";

export default async function Page() {
  const randomString = await fetch("https://generate-secret.vercel.app/32").then(r => r.text());
  return (
    <div>
      {randomString}
      <Refresh />
    </div>
  );
}
