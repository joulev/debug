"use client";

import { useSearchParams } from "next/navigation";

export default function RootLayoutClient({
  children,
}: React.PropsWithChildren) {
  useSearchParams();
  return <>{children}</>;
}
