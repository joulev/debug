import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

type ContainerElement = { type: "container"; children: CustomElement[] };
type ParagraphElement = { type: "paragraph"; children: CustomText[] };

type CustomElement = ContainerElement | ParagraphElement;
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
