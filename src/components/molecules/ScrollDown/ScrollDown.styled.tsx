import { zIndexes } from "@shared/constants";
import styled, { css, keyframes } from "styled-components";
import { ScrollDownProps } from "./ScrollDown";

const TextAnimation = keyframes`
0%{
	padding-left: 0;
}
50%{
	padding-left: 10px
}
100%{
	padding-left: 0;
}
`;

export const ScrollDownWrapper = styled.div<ScrollDownProps>(
  ({ side }) => `
  position: absolute;
  display: grid;
  grid-template: 150px 50px / 25px;
  bottom: 0;
  z-index: ${zIndexes.layout};
  gap: 10px;
  place-items: center;

  ${`${side}: 0px`};
	`
);

export const ScrollDownTextWrapper = styled.div(
  ({ theme: { colors, transitions } }) => css`
    display: block;
    transform: rotate(-90deg);
    width: 150px;
    font-size: 14px;
    color: ${colors.text.tertiary};
    cursor: default;
    animation: ${TextAnimation} ${transitions.long}s linear infinite;
    cursor: pointer;
  `
);
