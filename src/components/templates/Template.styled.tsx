import { breakpoints, sections } from "@shared/constants";
import styled from "styled-components";

export const TemplateWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const AboutSkillsWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;

  @media (max-width: ${breakpoints.sm}px) {
    grid-template: auto / 3fr 1fr;
  }
`;

export const WrapperForMovingIcons = styled.div<{
  currElIndex: number;
}>(
  ({ currElIndex, theme: { transitions } }) => `
  
  position: absolute;
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr;
  top: ${currElIndex > sections.home ? -100 : 0}%;
  transition: ${transitions.default}s;
  height: 200%;
  `
);
