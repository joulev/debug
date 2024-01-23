import type { GetServerSidePropsContext } from "next";

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  return <pre>{JSON.stringify(params)}</pre>;
}

export function getServerSideProps({ params }: GetServerSidePropsContext) {
  return {
    props: { params },
  };
}
