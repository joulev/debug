"use client";

export function DateInLocalTimezone({ date }: { date: Date }) {
  return <span suppressHydrationWarning>{date.toLocaleString("en-GB")}</span>;
}
