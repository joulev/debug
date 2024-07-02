"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TestContext = createContext("initial context value");
export function RenderContext() {
  const contextValue = useContext(TestContext);
  return <div>RenderContext: {contextValue}</div>;
}

export function RenderUseState() {
  const [state, _] = useState("initial state value");
  return <div>RenderUseState: {state}</div>;
}

export function RenderUseEffect() {
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);
  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, []);
  return (
    <div>
      RenderUseEffect: the browser viewport width when useEffect runs ={" "}
      {viewportWidth === null
        ? "loading... (cannot be determined in server rendering)"
        : viewportWidth}
    </div>
  );
}
