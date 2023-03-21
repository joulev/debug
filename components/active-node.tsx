import { useActiveNode } from "~/components/active-path-context";

export default function ActiveNode() {
  const node = useActiveNode();
  return (
    <pre className="text-xs overflow-y-auto">
      {JSON.stringify(node, null, 2)}
    </pre>
  );
}
