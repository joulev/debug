import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function Page() {
  return (
    <ReactMarkdown
      rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
    >{`
\`\`\`tsx
import { AppProps } from "next/app";
import "highlight.js/styles/github.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
\`\`\`
`}</ReactMarkdown>
  );
}
