import DisplayData from "./display-data";
import getData from "./get/get-data";

export default async function Page() {
  const data = await getData();
  return <DisplayData initData={data} />;
}
