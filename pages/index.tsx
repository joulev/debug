import { Tooltip } from "react-tooltip";

export default function Page() {
  return (
    <div>
      <span
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Hello world!"
        data-tooltip-place="top"
      >
        Hover me
      </span>
      <Tooltip id="my-tooltip" />
    </div>
  );
}
