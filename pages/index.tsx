export default function Page() {
  return <div>This shouldnt be shown</div>;
}

export function getServerSideProps() {
  throw new Error("whoops");
}
