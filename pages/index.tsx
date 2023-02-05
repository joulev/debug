import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function CheckSession() {
  const { data: session } = useSession();
  if (!session || !session.user) return <div>Not signed in</div>;
  return <div>Signed in as {session.user.name}</div>;
}

export default function Page() {
  return (
    <div>
      <Link href="/login">Log in</Link>
      <button onClick={() => signOut()}>Log out</button>
      <CheckSession />
    </div>
  );
}
