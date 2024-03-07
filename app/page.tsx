export default async function Page() {
  const data = await fetch(`https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.CRYPTOPANIC_AUTH_TOKEN}&public=true`).then(r => r.json());
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
