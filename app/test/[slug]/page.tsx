export default function Page({ params }: { params: { slug: string } }) {
  return <pre>{JSON.stringify(params)}</pre>;
}
