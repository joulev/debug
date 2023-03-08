import { headers } from "next/headers";

export default function Page() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  return (
    <div>
      <h1>Test</h1>
      <div>User agent = {userAgent}</div>
    </div>
  );
}
