"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, startTransition } from "react";

export default function Input({ query }: { query: string | null }) {
  const router = useRouter();
  const [value, setValue] = useState(query ?? "")
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      startTransition(() => router.push(value === "" ? "/" : `/?q=${encodeURIComponent(value)}`));
    }, 300);
    return () => clearTimeout(debounceTimeout);
  }, [value]);
  return <input value={value} onChange={e => setValue(e.target.value)} placeholder="Search" />;
}
