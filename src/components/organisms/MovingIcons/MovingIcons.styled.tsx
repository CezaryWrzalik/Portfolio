import { zIndexes } from "@shared/constants";
import styled from "styled-components";

export const MovingIconsWrapper = styled.div<{ currElIndex: number }>(
  ({ currElIndex }) => `
	
  position: absolute;
  height: 100%;
  width: 100%;
	overflow: hidden;
	z-index: -1;
	transition-delay: .5s;

	${
    currElIndex === 2 &&
    `
		z-index: 7;
		transition-delay: 0s;
	`
  }`
);
