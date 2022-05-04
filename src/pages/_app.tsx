import { GlobalStyled } from "../shared/styles/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";
import themeVariant from "../utils/themeVariant";
import { Theme } from "@@types/CommonTypes";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
  );
}

export default MyApp;
