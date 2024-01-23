"use client";

import { useEffect, useState } from "react";

export function DateInLocalTimezone({ date }: { date: Date }) {
  const [dateString, setDateString] = useState("loading");
  useEffect(() => {
    setDateString(date.toLocaleString("en-GB"));
  }, [date]);
  return dateString;
}
