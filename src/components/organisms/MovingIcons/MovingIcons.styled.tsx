import styled from "styled-components";

export const MovingIconsWrapper = styled.div<{currElIndex: number}>(
  ({ currElIndex }) => `
	
  position: absolute;
  height: 100%;
  width: 100%;
	overflow: hidden;
	z-index: -1;
	transition-delay: .5s;

	${currElIndex === 2 && `
		z-index: 2;
	transition-delay: 0s;

	`}
	z-index: ${currElIndex === 2 ? "2" : "-1"};
	`
);
