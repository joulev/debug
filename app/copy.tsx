"use client";
import clipboard from "clipboardy";

export default function Copy() {
  return (
    <button onClick={() => clipboard.write("hello world")}>
      Click me to copy
    </button>
  );
}
