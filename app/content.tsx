"use client";
import { useInView } from "react-intersection-observer";

export default function Content() {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="content">
      {inView ? "In view" : "Not in view"}
    </div>
  );
}
