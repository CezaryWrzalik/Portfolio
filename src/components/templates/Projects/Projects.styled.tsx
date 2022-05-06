import styled, { css, keyframes } from "styled-components";

export const ProjectsWrapper = styled.div(
  ({ theme: { colors } }) => `
	background: ${colors.body.bgTeritary};
	height: 100%;
	min-height: 100vh;
	position: relative;
	`
);

const firstEntryAnimation = ({ theme }: any) => keyframes`
0%{
	background: ${theme.colors.dynamic};
	opacity: 1;
	visibility: visible;

}
50%{background: ${theme.colors.dynamic};
	opacity: 1;
	visibility: visible;

}
99%{
	background: ${theme.colors.body.bgTeritary};
	opacity: 0;
	visibility: visible;

}
100%{
	background: ${theme.colors.body.bgTeritary};
	opacity: 0;
	visibility: hidden;

}
`;

export const FirstEntryImageWrapper = styled.div<{ animate: boolean }>(
  ({ animate, theme: { colors } }) => css`
    position: absolute;
    display: grid;
    height: 100vh;
    width: 100%;
    background: ${colors.dynamic};
    opacity: 1;
    transition: 0.5s;
    visibility: visible;
    top: 0;

    ${animate &&
    css`
      animation: ${firstEntryAnimation} ease-in-out 2s;
      background: ${colors.dynamic};
      opacity: 0;
      visibility: hidden;
    `}
  `
);

export const AnimateImage = styled.div`
	height: 100vh;
	position: relative;
`;

export const ContentWrapper = styled.div<{ animate?: boolean }>(
  ({ animate, theme: { colors } }) => `
		color: ${colors.text.secondary};
		padding-top: 50px;
		opacity: 0;
		${
      animate &&
      `opacity: 1;
		transition-delay: 2s;
		transition-duration: 1s;
		`
    };
		`
);

export const ProjectsList = styled.div``;
