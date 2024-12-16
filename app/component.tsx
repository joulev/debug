"use client";

import { useRouter } from "next/navigation";

export function Component() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/テスト");
      }}
    >
      Client redirect
    </button>
  );
}
