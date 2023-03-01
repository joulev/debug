import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
  params: { lang },
  searchParams,
}: {
  params: { lang: Locale };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const dictionary = await getDictionary(lang);
  if (searchParams && searchParams.throw === "true") throw new Error("lol");
  return (
    <div>
      <LocaleSwitcher />
      <p>
        Current locale: {lang} ({JSON.stringify(searchParams)})
      </p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}

export const dynamic = "force-dynamic";
