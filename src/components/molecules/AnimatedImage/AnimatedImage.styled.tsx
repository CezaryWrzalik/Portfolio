import { zIndexes } from "@shared/constants";
import styled, { css } from "styled-components";

export const AnimatedImageWrapper = styled.div<{
  visible: boolean;
  side: "Top" | "Bottom";
  halfScreen: boolean;
  zIndex?: number;
}>(
  ({ side, visible, halfScreen, theme: { transitions } }) => `
  position: absolute;
  width: 100%;
  place-items: center;
  display: grid;
	opacity: ${visible ? "1" : "0"};
  visibility: ${visible ? "visible" : "hidden"};;
  transition: opacity ${transitions.default}s, visibility 0s, top 1s;
  cursor: default;


  ${halfScreen && `width: 50%`};
	${side === "Top" && "top: 0%"};
	${side === "Bottom" && "bottom: 0%"};

`
);

const stylesForBottom = css<{
  direction?: "Top" | "Bottom";
}>(
  ({ direction }) => css`
    bottom: -50%;

    :hover {
      ${direction === "Top" && "bottom: 0%"};
      ${direction === "Bottom" && "bottom: -100%"};
    }
  `
);

const stylesForTop = css<{ direction?: "Top" | "Bottom" }>(
  ({ direction }) => css`
    top: -50%;

    :hover {
      ${direction === "Top" && "top: -100%"};
      ${direction === "Bottom" && "top: 0%"};
    }
  `
);

export const ImageWrapper = styled.div<{
  direction?: "Top" | "Bottom";
  side: "Top" | "Bottom" | "Mid";
}>(
  ({ side, theme: { transitions } }) => css`
    position: relative;
    transition: ${transitions.default}s;
    cursor: pointer;

    ${side === "Top" && stylesForTop};
    ${side === "Bottom" && stylesForBottom};
    ${side === "Mid" && "Top: 0%"};

    :hover {
      display: block;
      height: 100%;
    }
  `
);
