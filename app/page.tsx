export default function Page() {
  return (
    <dl className="flex flex-col gap-4 p-4 [&_dt]:text-slate-500 [&_dd]:text-2xl">
      <div>
        <dt>Inter as on Tailwind websites (cv02, cv03, cv04 and cv11)</dt>
        <dd contentEditable suppressContentEditableWarning>
          The quick brown fox jumps over the lazy dog 0123456789
        </dd>
      </div>
      <div>
        <dt>Inter</dt>
        <dd
          style={{ fontFeatureSettings: "normal" }}
          contentEditable
          suppressContentEditableWarning
        >
          The quick brown fox jumps over the lazy dog 0123456789
        </dd>
      </div>
      <div>
        <dt>
          You can customise the{" "}
          <a
            href="https://rsms.me/inter/#features"
            className="underline underline-offset-4"
          >
            font variant
          </a>{" "}
          as you please. Example for ss01, ss02 and cv11:
        </dt>
        <dd
          style={{ fontFeatureSettings: "'ss01' 'ss02' 'cv11'" }}
          contentEditable
          suppressContentEditableWarning
        >
          The quick brown fox jumps over the lazy dog 0123456789
        </dd>
      </div>
    </dl>
  );
}
