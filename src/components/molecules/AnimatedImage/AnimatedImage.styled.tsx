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
  height: 10%;
  display: grid;
  place-items: center;
	opacity: ${visible ? "1" : "0"};
  transition: opacity ${transitions.default}s;

  ${halfScreen && `width: 50%`};
	${side === "Top" && "top: 0%"};
	${side === "Bottom" && "Bottom: 0%"};
	${side === "Mid" && stylesForMiddle};
  
	
  span{
    ${side === "Top" && "top: -50%"};
    ${side === "Bottom" && "Bottom: -50%"};
    ${side === "Mid" && "Mid: 50%"};
  }
}`
);
