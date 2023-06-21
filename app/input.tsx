"use client";
import { useRouter } from "next/navigation";
import { useState, startTransition } from "react";

export default function Input() {
  const router = useRouter();
  const [value, setValue] = useState("");
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    startTransition(() =>
      router.push(value === "" ? "/" : `/?q=${encodeURIComponent(value)}`)
    );
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Query..."
      />
      <button>Search</button>
    </form>
  );
}
