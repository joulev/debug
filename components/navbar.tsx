import Link from "next/link";
import { useContext } from "react";
import Context from "~/components/context";

export default function Navbar() {
  const data = useContext(Context);
  return (
    <div>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
      <div>Global data: {data ? data.name : "not available"}</div>
    </div>
  );
}
