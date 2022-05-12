import { SectionIndexes } from "@@types/CommonTypes";
import { sections, zIndexes } from "@shared/constants";
import styled, { css, keyframes } from "styled-components";

export const ProjectsWrapper = styled.div<{
  currElIndex: SectionIndexes;
  canScroll: boolean;
}>(
  ({ currElIndex, canScroll, theme: { colors, transitions } }) => `
	background: ${colors.body.bgTeritary};
	height: 100%;
	position: absolute;
	width: 100%;
	top: ${currElIndex > sections.skills ? 0 : 100}%;
	transition: ${transitions.default}s;
	z-index: ${zIndexes.projects};
	overscroll-behavior-y: none;
	-webkit-overflow-scrolling: touch;
	overflow: ${canScroll ? "auto" : "hidden"};

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
  ({ animate, theme: { colors, transitions } }) => css`
    position: absolute;
    top: 0;
    display: grid;
    height: 100vh;
    width: 100%;
    background: ${colors.dynamic};
    opacity: 1;
    transition: ${transitions.default}s;
    visibility: visible;
    top: 0;

    ${animate &&
    css`
      position: absolute;
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
  ({ animate, theme: { colors, transitions } }) => `
		color: ${colors.text.secondary};
		padding-top: 50px;
		opacity: 0;
		${
      animate &&
      `opacity: 1;
		transition-delay: 2s;
		transition-duration: ${transitions.long}s;
		`
    };
		`
);

export const ProjectsList = styled.div``;
