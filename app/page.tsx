"use client";

import { useSidebar } from "./sidebar-provider";

export default function Page() {
  const { toggleOpen } = useSidebar();
  return <button onClick={() => toggleOpen()}>Toggle open</button>;
}
