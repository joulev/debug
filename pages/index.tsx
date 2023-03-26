import { useCallback, useEffect, useState } from "react";
import { createEditor, Descendant, Editor, Element, Node, Path } from "slate";
import {
  Editable as SlateEditable,
  Slate,
  withReact,
  useSlateSelection,
  useSlate,
} from "slate-react";
import ActiveNode from "~/components/active-node";
import {
  ActivePathContext,
  useActivePath,
} from "~/components/active-path-context";
import RenderElement from "~/components/render-element";

const initialValue: Descendant[] = [
  {
    type: "container",
    children: [
      {
        type: "paragraph",
        children: [{ text: "Paragraph 1" }],
      },
      {
        type: "container",
        children: [
          {
            type: "paragraph",
            children: [{ text: "Paragraph 2" }],
          },
          {
            type: "container",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Paragraph 3" }],
              },
            ],
          },
        ],
      },
    ],
  },
];

function Editable() {
  const editor = useSlate();
  const selection = useSlateSelection();
  const { setPath } = useActivePath();
  const renderElement = useCallback(RenderElement, []);
  useEffect(() => {
    if (!selection) return;
    let _path = selection.anchor.path.slice();
    while (true) {
      const node = Node.get(editor, _path);
      if (Editor.isEditor(node)) {
        setPath([]);
        return;
      }
      if (!Element.isElement(node)) {
        _path = Path.parent(_path);
        continue;
      }
      setPath(_path);
      return;
    }
  }, [editor, selection, setPath]);
  return (
    <SlateEditable renderElement={renderElement} onClick={() => setPath([])} />
  );
}

export default function Page() {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(initialValue);
  const [path, setPath] = useState<Path>([]);
  return (
    <ActivePathContext.Provider value={{ path, setPath }}>
      <Slate editor={editor} value={value} onChange={setValue}>
        <div className="h-screen w-screen grid grid-cols-2 gap-6 p-6">
          <Editable />
          <ActiveNode />
        </div>
      </Slate>
    </ActivePathContext.Provider>
  );
}
