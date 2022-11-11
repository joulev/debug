import { redirect } from "next/navigation";

export default function Home() {
  redirect("/test");
  return <div>This is unreachable</div>;
}
