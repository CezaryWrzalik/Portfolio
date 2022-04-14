import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../../types/commonTypes";

export const GlobalStyled = createGlobalStyle<{ theme: ThemeType }>`
${normalize};

*{
	box-sizing: border-box;
}

body{
	font-family: ${({ theme }) => theme.fontFamily};
}

html,body,#__next{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
`;
