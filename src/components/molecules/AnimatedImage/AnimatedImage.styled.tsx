import styled, { css } from "styled-components";

const stylesForMiddle = css`
  height: 100%;
  width: 100%;
  transition: 1s ease-in-out;
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
  height: 150px;
  display: grid;
	opacity: ${visible ? "1" : "0"};
  visibility: ${visible ? "visible" : "hidden"};;
  transition: opacity ${transitions.default}s, visibility 0s, top 1s;
  cursor: pointer;



  ${halfScreen && `width: 50%`};
	${side === "Top" && "top: 0%"};
	${side === "Bottom" && "bottom: 0%"};
	${side === "Mid" && stylesForMiddle};

`
);

const stylesForBottom = css<{ direction?: "Top" | "Bottom" }>(
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
  ({ direction, side, theme: { transitions } }) => css`
    position: relative;
    transition: ${transitions.default}s;

    ${side === "Top" && stylesForTop};
    ${side === "Bottom" && stylesForBottom};
    ${side === "Mid" && "Top: 0%"};

    :hover {
      display: block;
      height: 100%;
    }
  `
);
