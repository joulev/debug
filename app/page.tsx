import { cookies } from "next/headers";
import { Suspense } from "react";
import { SetCookie } from "./set-cookie";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return cookies().get("foo")?.value ?? null;
}

async function SlowPage() {
  const data = await getData();
  return <div>Cookies = {data ?? "unavailable"}</div>;
}

export default async function Page() {
  const key = cookies().get("foo")?.value ?? "n/a";
  return (
    // This "Loading" will not work in Safari due to a Safari bug, but for a
    // real-world loading screen it will likely work fine.
    // Ref: https://github.com/vercel/next.js/issues/52444
    <Suspense fallback={<div>Loading</div>} key={key}>
      <SlowPage />
      <SetCookie />
    </Suspense>
  );
}
