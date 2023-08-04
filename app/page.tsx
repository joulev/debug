import { cookies } from "next/headers";

export default function Page() {
  const cookie = cookies().get("test");
  return <div>{cookie ? cookie.value : "no cookies present"}</div>;
}

export const runtime = "edge";
