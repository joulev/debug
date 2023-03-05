import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function handleStartRoute() {
      setIsLoading(true);
    }

    function handleStopRoute() {
      setIsLoading(false);
    }

    router.events.on("routeChangeStart", handleStartRoute);
    router.events.on("routeChangeComplete", handleStopRoute);

    return () => {
      router.events.off("routeChangeStart", handleStartRoute);
      router.events.off("routeChangeComplete", handleStopRoute);
    };
  }, [router]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: "white",
        opacity: isLoading ? 1 : 0,
        transition: "opacity 0.3s",
        pointerEvents: "none",
      }}
    >
      Loading...
    </div>
  );
}
