"use client";
import KaTeX from "@matejmazur/react-katex";

export default function Home() {
  return (
    <div>
      <KaTeX math="\int_0^\infty x^2 dx" />
    </div>
  );
}
