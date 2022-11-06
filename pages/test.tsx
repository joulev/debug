import { compile } from "@mdx-js/mdx";

export default function Page({ content }: { content: string }) {
    return <div>{content}</div>;
}

export async function getStaticProps() {
    const rawContent = "This is a **Markdown** string.";
    const content = String(await compile(rawContent, { outputFormat: "function-body" }));
    return { props: { content } };
}
