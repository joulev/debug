"use client";
import Markdown from "react-markdown";
import rehypeShikiji, { RehypeShikijiOptions } from "rehype-shikiji";

const md = `
This is a code block

\`\`\`ts
export function add(a: number, b: number) {
  return a + b;
}
\`\`\`
`;

export default function Page() {
  return (
    <Markdown
      rehypePlugins={[
        [rehypeShikiji, { theme: "nord" } satisfies RehypeShikijiOptions],
      ]}
    >
      {md}
    </Markdown>
  );
}
