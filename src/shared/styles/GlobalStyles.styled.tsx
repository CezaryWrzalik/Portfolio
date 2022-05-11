import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { ThemeType } from "@@types/CommonTypes";

export const GlobalStyled = createGlobalStyle<{ theme: ThemeType }>(
  ({ theme: { fontFamily, colors } }) => `
	${normalize};
	
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	body{
		font-family: ${fontFamily.primary};
		background: #2D2D2D;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	html,body,#__next, #root{
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
		
		::-webkit-scrollbar {
			width: 0;
		}
		
		::selection {
			background: ${colors.dynamic};
		}
		`
);
