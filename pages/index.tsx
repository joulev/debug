export default function Page({ date, bigInt }: { date: Date; bigInt: BigInt }) {
  return (
    <div>
      <div>Date = {date.toISOString()}</div>
      <div>BigInt = {bigInt.toString()}</div>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      date: new Date(),
      bigInt: BigInt(1234567890),
    },
  };
}
