import { getQuantity } from "./db";
import { PageClient } from "./page-client";

export default async function Page() {
  const quantity = await getQuantity();
  return <PageClient quantity={quantity} />;
}
