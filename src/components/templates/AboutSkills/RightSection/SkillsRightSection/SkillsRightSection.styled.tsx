import { CurrElIndexProps } from "@@types/CommonTypes";
import { sections, zIndexes } from "@shared/constants";
import styled from "styled-components";

export const SkillsRightSectionWrapper = styled.div<CurrElIndexProps>(
  ({ currElIndex, theme: { colors, transitions } }) => `
    position: relative;
    width: 100%;
    height: 100%;
    background: blue;
    top: -100%;
    background: ${colors.body.bgPrimary};
    left: ${currElIndex >= sections.skills ? 0 : -100}%;
    transition: ${transitions.default}s;
    `
);

export const SkillsContentWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr / 1fr;
  place-items: center;
  z-index: ${zIndexes.skillsPlus};
`;
