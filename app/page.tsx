import { redirect } from "next/navigation";
import Link from "next/link";
import { Component } from "./component";

export default function Page() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          redirect("/テスト");
        }}
      >
        <button>Server redirect</button>
      </form>
      <Component />
      <Link href="/テスト">Link</Link>
    </div>
  );
}
