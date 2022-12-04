export default function DynamicPage({ params }: { params: { slug: string } }) {
  return <div>/dynamic/{params.slug}</div>;
}

export function generateStaticParams() {
  return [{ slug: "foo" }, { slug: "bar" }];
}
