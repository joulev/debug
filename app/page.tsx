import { DateInLocalTimezone } from "./date-in-local-timezone";

const date = new Date(1234567890123);

export default function Page() {
  return (
    <dl>
      <dt>Date in UTC:</dt>
      <dd>{date.toLocaleString("en-GB", { timeZone: "UTC" })}</dd>
      <dt>Date in UTC+3:</dt>
      <dd>{date.toLocaleString("en-GB", { timeZone: "Antarctica/Syowa" })}</dd>
      <dt>Date in local timezone:</dt>
      <dd>
        <DateInLocalTimezone date={date} />
      </dd>
    </dl>
  );
}
