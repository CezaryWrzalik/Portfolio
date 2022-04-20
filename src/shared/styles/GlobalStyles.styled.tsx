import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { ThemeType } from "@@types/CommonTypes";

export const GlobalStyled = createGlobalStyle<{ theme: ThemeType }>`
${normalize};

*,
*::before,
*::after {
		box-sizing: inherit;
}

html{
	scroll-behavior: smooth;
}

body{
	font-family: ${({ theme }) => theme.fontFamily.primary};
	background: #2D2D2D;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html,body,#__next, #root{
	width: 100%;
	height: 100%;
	overflow-X; hidden;
}

::-webkit-scrollbar {
  width: 0;
}
`;
