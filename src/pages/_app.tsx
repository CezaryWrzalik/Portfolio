import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "../shared/styles/GlobalStyles.styled";
import themeVariant from "../utils/themeVariant";
import { Theme } from "@@types/CommonTypes";
import { Layout } from "src/components/organisms/Layout/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={themeVariant[Theme.DEFAULT]}>
      <GlobalStyled />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
