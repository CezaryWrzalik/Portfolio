import styled, { css, keyframes } from "styled-components";

export const ProjectsWrapper = styled.div(
  ({ theme: { colors } }) => `
	background: ${colors.body.bgTeritary};
	height: 100%;
	position: relative;
	`
);

const firstEntryAnimation = ({ theme }: any) => keyframes`
0%{
	background: ${theme.colors.body.bgSecondary};
	opacity: 1;
}
50%{background: ${theme.colors.body.bgSecondary};
	opacity: 1;
}
100%{
	background: ${theme.colors.body.bgTeritary};
	opacity: 0;
}
`;

export const FirstEntryImageWrapper = styled.div<{ animate: boolean }>(
  ({ animate, theme: { colors } }) => css`
    position: relative;
    display: grid;
    height: 100%;
    width: 100%;
    background: ${colors.body.bgSecondary};
    opacity: 1;
		transition: .5s;

    ${animate &&
    css`
      animation: ${firstEntryAnimation} ease-in-out 2s;
      background: ${colors.body.bgTeritary};
			opacity: 0;
    `}
  `
);

export const ContentWrapper  = styled.div`

`
