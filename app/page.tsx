export default async function Page() {
  const value = await fetch("https://generate-secret.vercel.app/16").then((v) =>
    v.text()
  );
  console.log(value);
  return <div>{value}</div>;
}
