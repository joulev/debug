export default function Page({
  params,
}: {
  params: { foo: string[] | undefined };
}) {
  return <pre>{JSON.stringify(params ?? [])}</pre>;
}
