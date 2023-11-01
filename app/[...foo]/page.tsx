export default function Page({ params }: { params: { foo: string[] } }) {
  return <pre>{JSON.stringify(params)}</pre>;
}
