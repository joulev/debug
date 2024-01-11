export default function Page() {
  return (
    <dl className="flex flex-col gap-4 p-4 [&_dt]:text-slate-500 [&_dd]:text-2xl">
      <div>
        <dt>Inter as on Tailwind websites</dt>
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
    </dl>
  );
}
