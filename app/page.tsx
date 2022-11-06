import { compile } from "@mdx-js/mdx";

async function getContent() {
  const rawContent = "This is a **Markdown** string.";
  const content = String(await compile(rawContent, { outputFormat: "function-body" }));
  return content;
}

export default async function Page() {
  const content = await getContent();
  return <div>{content}</div>;
}
