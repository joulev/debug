import dataUrl from "./cat.jpeg?inline";
import normalCat from "./cat.jpeg";

export default function Page() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        }}
      >
        <div>
          <h2>This cat is rendered immediately</h2>
          <img src={dataUrl} />
        </div>
        <div>
          <h2>
            This cat is fetched during page load, so it's loaded slightly later
          </h2>
          <img src={normalCat.src} />
        </div>
      </div>
      <h2>
        Data URL (the following are sent to the browser during page load):
      </h2>
      <div style={{ overflowWrap: "break-word" }}>{dataUrl}</div>
    </div>
  );
}
