import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/gssp">Go to gssp'ed page</Link> (you will see a 1s delay,
      regardless of whether you have visited /gssp during this session or not)
    </div>
  );
}
