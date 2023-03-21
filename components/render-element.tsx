import clsx from "clsx";
import deepEqual from "fast-deep-equal";
import { useCallback, useMemo } from "react";
import { ReactEditor, RenderElementProps, useSlate } from "slate-react";
import { useActivePath } from "~/components/active-path-context";

export default function RenderElement({
  attributes,
  children,
  element,
}: RenderElementProps) {
  const editor = useSlate();
  const { path, setPath } = useActivePath();
  const nodePath = useMemo(
    () => ReactEditor.findPath(editor, element),
    [editor, element]
  );
  const isActive = useMemo(
    () => path && deepEqual(path, nodePath),
    [path, nodePath]
  );
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      setPath(nodePath);
    },
    [nodePath, setPath]
  );
  switch (element.type) {
    case "container":
      return (
        <div
          {...attributes}
          className={clsx(
            "p-6 transition",
            isActive
              ? "outline outline-red-300"
              : "hover:outline hover:outline-gray-300"
          )}
          onClick={onClick}
        >
          {children}
        </div>
      );
    case "paragraph":
      return (
        <p
          {...attributes}
          className={clsx(
            "mb-6 transition",
            isActive
              ? "outline outline-red-300"
              : "hover:outline hover:outline-gray-300"
          )}
          onClick={onClick}
        >
          {children}
        </p>
      );
  }
}
