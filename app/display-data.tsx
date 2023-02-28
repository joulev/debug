"use client";
import useSWRInfinite from "swr/infinite";
import { InView } from "react-intersection-observer";

export default function DisplayData({ initData }: { initData: number[] }) {
  const { data, setSize } = useSWRInfinite<number>(
    (index) => `/get?page=${index + 1}`,
    (url) => fetch(url).then((res) => res.json())
  );
  const items = data ? data.flat() : initData; // SEO friendly
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {items.map((item, index) => (
        <div key={index} style={{ height: 200, border: "1px solid red" }}>
          {item}
        </div>
      ))}
      <InView
        as="div"
        onChange={(inView) => {
          if (inView) setSize((size) => size + 1);
        }}
      >
        Loading&hellip;
      </InView>
    </div>
  );
}
