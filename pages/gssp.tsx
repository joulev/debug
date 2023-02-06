import { GetServerSideProps } from "next";
import Link from "next/link";

type Props = {
  user: { name: string };
};

export default function Page({ user }: Props) {
  return (
    <div>
      <div>User name is {user.name}.</div>
      <div>
        <Link href="/">Go to home page</Link> and come back to this page to see
        gssp in action.
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { props: { user: { name: "John Doe" } } };
};
