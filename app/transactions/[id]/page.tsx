export default function Page({ params }: { params: { id: string } }) {
  return <h1>{params.id}</h1>;
}
