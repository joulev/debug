// TODO: Type this properly
type Data = unknown;

export default function Page({ data }: { data: Data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

// or getStaticProps
export async function getServerSideProps() {
  const data = await fetch(`https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.CRYPTOPANIC_AUTH_TOKEN}&public=true`).then(r => r.json());
  return { props: { data } };
}
