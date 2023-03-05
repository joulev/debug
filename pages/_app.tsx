import LoadingScreen from "components/loading";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadingScreen />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
