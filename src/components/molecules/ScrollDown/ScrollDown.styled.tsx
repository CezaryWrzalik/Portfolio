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
  z-index: 10;
  gap: 10px;
  place-items: center;
  ${`${side}: 0px`};
	`
);

export const ScrollDownTextWrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: block;
    transform: rotate(-90deg);
    width: 150px;
    color: ${colors.text.tertiary};
    font-size: 14px;
    animation: ${TextAnimation} 1s linear infinite;
  `
);
