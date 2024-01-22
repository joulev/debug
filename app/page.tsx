export default function Page() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 16, padding: 16 }}
    >
      {["100", "300", "400", "500", "700", "900"].map((weight) => (
        <div
          key={weight}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: 16,
          }}
        >
          <div style={{ fontVariantNumeric: "tabular-nums", color: "gray" }}>
            {weight}
          </div>
          <div style={{ fontSize: 24, fontWeight: weight }}>
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
      ))}
    </div>
  );
}
