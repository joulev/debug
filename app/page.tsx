import {
  RenderContext,
  RenderUseEffect,
  RenderUseState,
} from "./client-components";

export default function Page() {
  return (
    <div>
      <RenderContext />
      <RenderUseState />
      <RenderUseEffect />
    </div>
  );
}
