"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function SetCookie() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <button
      onClick={() => {
        document.cookie = `foo=${new Date().toISOString()}`;
        startTransition(() => router.refresh());
      }}
      style={{ opacity: pending ? 0.5 : 1 }}
    >
      Click me
    </button>
  );
}
