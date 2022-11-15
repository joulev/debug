type Params = {
  a: string;
}
type Props = React.PropsWithChildren<{ params: Params }>;

export default function ALayout({ children, params }: Props) {
  return <div>{children}</div>;
}

export async function generateStaticParams(): Promise<Params[]> {
  return [{ a: "a" }];
}

export const dynamicParams = false;