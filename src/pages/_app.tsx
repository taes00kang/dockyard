/* eslint-disable react/jsx-props-no-spreading */

import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ReduxProvider } from "../redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
