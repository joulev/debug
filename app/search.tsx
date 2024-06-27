"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <form
      action={(formData) => {
        const query = formData.get("query");
        if (typeof query !== "string") return;
        const updatedSearchParams = new URLSearchParams(searchParams);
        if (query) updatedSearchParams.set("query", query);
        else updatedSearchParams.delete("query");
        router.replace(`${pathname}?${updatedSearchParams.toString()}`);
      }}
    >
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
