import styled, { css } from "styled-components";

const stylesForMiddle = css`
  height: 100%;
  transition: ease-in-out 1s;
  width: 100%;
`;

export const AnimatedImageWrapper = styled.div<{
  visible: boolean;
  side: "Top" | "Bottom" | "Mid";
  halfScreen: boolean;
}>(
  ({ side, visible, halfScreen, theme: { transitions } }) => `
  position: absolute;
  width: 100%;
  place-items: center;
  display: grid;
	opacity: ${visible ? "1" : "0"};
  visibility: ${visible ? "visible" : "hidden"};;
  transition: opacity ${transitions.default}s, visibility 0s;
  cursor: pointer;

  ${halfScreen && `width: 50%`};
	${side === "Top" && "top: 0%"};
	${side === "Bottom" && "Bottom: 0%"};
	${side === "Mid" && stylesForMiddle};

`
);

export const ImageWrapper = styled.div<{
  direction?: "Top" | "Bottom";
  side: "Top" | "Bottom" | "Mid";
}>(
  ({ direction, side, theme: { transitions } }) => `
    position: relative;
    transition: ${transitions.default}s;

    ${side === "Top" && "top: -50%"};
    ${side === "Bottom" && "Bottom: -50%"};
    ${side === "Mid" && "Mid: 50%"};

    :hover {
      display: block;
      height: 100%;
      ${direction === "Top" && "top: -100%"};
      ${direction === "Bottom" && "top: 0%"};
    }
  `
);
