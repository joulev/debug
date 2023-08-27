import { AppProps } from "next/app";
import data from "~/data.json";
import Context from "~/components/context";
import Navbar from "~/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context.Provider value={data}>
      <Navbar />
      <Component {...pageProps} />
    </Context.Provider>
  );
}
