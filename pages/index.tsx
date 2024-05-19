export default function Page({
  now,
  runtime,
}: {
  now: string;
  runtime: string;
}) {
  return (
    <div>
      This page was rendered on the {runtime} runtime at {now}.
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {
      now: new Date().toISOString(),
      runtime: process.env.NEXT_RUNTIME ?? "unknown",
    },
  };
}

export const config = {
  runtime: "edge",
};
