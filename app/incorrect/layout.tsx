import { Suspense } from "react";
import CustomLoading from "./ssr/custom-loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<CustomLoading />}>{children}</Suspense>;
}
