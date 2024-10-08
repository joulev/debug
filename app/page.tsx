import { env } from "~/env";

export default function Page() {
  return <div>{env.FOO}</div>;
}
