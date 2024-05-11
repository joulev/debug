"use client";

import useSWRInfinite from "swr/infinite";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useDebounce } from "./use-debounce";

function Item({ item }: { item: string }) {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        width: 200,
        height: 200,
        fontSize: 48,
        display: "grid",
        placeItems: "center",
      }}
    >
      {item}
    </div>
  );
}

async function fetcher(key: string) {
  const res = await fetch(key);
  return res.json() as Promise<string[]>;
}

export function Items({ initialData }: { initialData: string[] }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce("", query);

  const { data, size, setSize } = useSWRInfinite(
    (page, prevPageData) =>
      prevPageData && !prevPageData.length
        ? null
        : debouncedQuery
        ? `/api?page=${page}&query=${debouncedQuery}`
        : `/api?page=${page}`,
    fetcher,
    {
      fallbackData: debouncedQuery ? undefined : [initialData],
      // Disable auto revalidation
      revalidateOnMount: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateFirstPage: false,
    }
  );

  const waitingDebounce = query !== debouncedQuery;
  const isFull = data?.[size - 1] && data[size - 1].length === 0;

  const { ref } = useInView({
    onChange: (inView) => {
      if (!inView || isFull) return;
      setSize((size) => size + 1);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        margin: 20,
      }}
    >
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <div>Query (debounced): {debouncedQuery || "(empty)"}</div>
      {data && !waitingDebounce ? (
        data.flat().map((item) => <Item item={item} key={item} />)
      ) : (
        <div>Loading</div>
      )}
      {data && !waitingDebounce && !isFull ? (
        <div
          ref={ref}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "lightgray",
          }}
        />
      ) : null}
    </div>
  );
}
