import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const LeftSectionWrapper = styled.div(
  ({ theme: { colors } }) => `
  background: ${colors.body.bgSecondary};
  place-items: center;
  position: relative;
  z-index: 3;
  display: grid;
	`
);

export const ImagesWrapper = styled.div`
  position: relative;
  max-width: 220px;
  width: 40%;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div<{ currElIndex: number }>(
  ({ currElIndex, theme: { transitions } }) => `
  opacity: ${currElIndex <= 1 ? "1" : "0"};
  transition: ${transitions.default}s;
  position: absolute;
  transform: translateY(-50%);
  margin: -10px 10px 10px -10px;
  
  @media(max-width: ${breakpoints.sm}px){
    margin: 0;
  }
  `
);

export const BlurElement = styled.div(
  ({ theme: { colors } }) => `
  position: absolute;
  height: 100%;
  background: ${colors.body.bgPrimary};
  width: 100%;
	opacity: .4;
	top: 0;
  `
);

export const BorderWrapper = styled(ImageWrapper)`
  position: absolute;
  display: none;

  @media (min-width: ${breakpoints.sm}px) {
    display: block;
    margin: 10px -10px -10px 10px;
  }
`;

export const SkillsImageWrapper = styled.div<{ currElIndex: number }>(
  ({ currElIndex, theme: { transitions } }) => `
      position: absolute;
      left: 50%;
      top: 50%;
      transform-origin: 0 0;
      transform: rotate(-90deg) translate(-50%, -50%);
      transition: ${transitions.default}s;
      opacity: ${currElIndex >= 2 ? "1" : "0"};

      @media (max-width: ${breakpoints.sm}px){
        width: 100%;
      }
`
);

export const CurrentImage = styled.span;
