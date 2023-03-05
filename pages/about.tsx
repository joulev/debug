export default function Page() {
  return "About";
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { props: {} };
}
