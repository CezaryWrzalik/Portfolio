import styled from "styled-components";


export const AnimatedImageWrapper = styled.div<{visible: boolean,  side: "Top" | "Bottom" }>(
  ({ side, visible, theme: {transitions} }) => `
  position: absolute;
  width: 100%;
  height: 100px;
  display: grid;
  place-items: center;
	opacity: ${visible ? "1" : "0"};
	transition: ${transitions.default}s;

	${side === 'Top' ? "top: 0" : "bottom: 0"};
	
  span{
		${side === 'Top' ? "top: -50%" : "top: 50%"};
  }
}`
);
