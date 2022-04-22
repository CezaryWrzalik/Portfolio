import { yValuesKeys } from "@@types/CommonTypes";
import styled from "styled-components";

export const LeftSectionWrapper = styled.div(
  ({ theme: { colors } }) => `
	position: relative;
	height: 100%
	width: 100%;
	background: ${colors.body.bgSecondary};
	display: grid;
	place-items: center;
	`
);

export const ImageWrapper = styled.div<{ elementOnScreen: yValuesKeys }>(
  ({ elementOnScreen, theme: { transitions } }) => `
    position: absolute;
    opacity: ${elementOnScreen === "About" ? "1" : "0"};
    transition: ${transitions.default}s;
    
    span {
      max-height: 40%;
    }
    `
);

export const BlurElement = styled.div(
  ({ theme: { colors } }) =>
    `
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${colors.body.bgPrimary};
	opacity: .4;
	top: 0;
	
  `
);

export const BorderWrapper = styled(ImageWrapper)`
  position: absolute;
  padding-left: 40px;
  padding-top: 40px;
`;

export const SkillsImageWrapper = styled.div<{ elementOnScreen: yValuesKeys }>(
  ({ elementOnScreen, theme: { transitions } }) => `
      position: absolute;
      left: 50%;
      top: 50%;
      transform-origin: 0 0;
      transform: rotate(-90deg) translate(-50%, -50%);
      transition: ${transitions.default}s;
      opacity: ${elementOnScreen === "Skills" ? "1" : "0"};
`
);

export const CurrentImage = styled.span;
