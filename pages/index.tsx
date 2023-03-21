import { useCallback, useState } from "react";
import { createEditor, Descendant, Path } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import ActiveNode from "~/components/active-node";
import { ActivePathContext } from "~/components/active-path-context";
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

export default function Page() {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(initialValue);
  const [path, setPath] = useState<Path>([]);
  const renderElement = useCallback(RenderElement, []);
  return (
    <ActivePathContext.Provider value={{ path, setPath }}>
      <Slate editor={editor} value={value} onChange={setValue}>
        <div className="h-screen w-screen grid grid-cols-2 gap-6 p-6">
          <Editable renderElement={renderElement} onClick={() => setPath([])} />
          <ActiveNode />
        </div>
      </Slate>
    </ActivePathContext.Provider>
  );
}
