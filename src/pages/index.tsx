import { colorAtom } from "@@recoil/atom/colorAtom";
import { Theme } from "@@types/CommonTypes";
import { GlobalStyled } from "@shared/styles/GlobalStyles.styled";
import { palette } from "@shared/theme/config";
import themeVariant from "@utils/themeVariant";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Template } from "src/components/templates/Template";
import { ThemeProvider } from "styled-components";

const MainPage: NextPage = () => {
  const [colorPicked, setColorPicked] = useRecoilState(colorAtom);
  const [state, setState] = useState(themeVariant[Theme.DEFAULT]);

  useEffect(() => {
    const newTheme = { ...state };
    newTheme.colors.dynamic = colorPicked;
    setState(newTheme);
  }, [colorPicked]);

  return (
    <>
      <ThemeProvider theme={state}>
        <GlobalStyled />
        <Template />
      </ThemeProvider>
    </>
  );
};

export default MainPage;
