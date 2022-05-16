import { CurrElIndexProps } from "@@types/CommonTypes";
import { breakpoints, sections } from "@shared/constants";
import styled from "styled-components";

export const AboutAndSkillsWrapper = styled.div<CurrElIndexProps>(
  ({ currElIndex, theme: { transitions } }) => `
	position: absolute;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  height: 100%;
	width: 100%;
	top: ${currElIndex >= sections.about ? 0 : 100}%;
	transition: top ${transitions.default}s;
	
  @media (max-width: ${breakpoints.sm}px) {
		grid-template: auto / 3fr 1fr;
  }
	`
);
