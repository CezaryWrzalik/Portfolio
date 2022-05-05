import { AnimationTypes } from "@@types/CommonTypes";
import styled, { css } from "styled-components";

const stylesForSlideTop = css`
  top: 0;
`;

export const RelativeWrapper = styled.div<{
  isVisible: boolean;
  delay: number;
  animation?: AnimationTypes;
}>(
  ({ isVisible, delay, animation, theme: { transitions } }) => css`
    position: relative;
    width: 100%;
    top: ${animation === "slideTop" ? "300px" : "0px"};
    opacity: 0;
    transition: ${transitions.default}s ${0.4 + 0.2 * delay}s;

    ${isVisible &&
    `
			opacity: 1;
		${animation === "slideTop" && stylesForSlideTop}
		`}
  `
);
