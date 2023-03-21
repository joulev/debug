import { createContext, useContext, useState } from "react";
import { Editor, Path } from "slate";
import { useSlate } from "slate-react";

export const ActivePathContext = createContext<{
  path: Path;
  setPath: (path: Path) => void;
} | null>(null);

export function useActivePath() {
  const context = useContext(ActivePathContext);
  if (!context) {
    throw new Error(
      "useActivePath must be used within an ActivePathContextProvider"
    );
  }
  return context;
}

export function useActiveNode() {
  const editor = useSlate();
  const { path } = useActivePath();
  return Editor.node(editor, path)[0];
}
