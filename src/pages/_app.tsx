import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "../shared/styles/GlobalStyles.styled";
import { Theme } from "../types/commonTypes";
import themeVariant from "../utils/themeVariant";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={themeVariant[Theme.DEFAULT]}>
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
