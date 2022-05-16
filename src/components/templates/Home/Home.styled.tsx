import { CurrElIndexProps } from "@@types/CommonTypes";
import { breakpoints, sections } from "@shared/constants";
import styled from "styled-components";

export const HomeWrapper = styled.div<CurrElIndexProps>(
  ({ currElIndex, theme: { colors, transitions } }) => `
  position: absolute;
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	grid-template: 1fr / 2fr 1fr;
	padding: 4px;
	margin: auto;
	top: ${currElIndex === sections.home ? 0 : -100}%;
	transition: top ${transitions.default}s;
	
	color: ${colors.text.primary};
	
	
	@media (min-width: ${breakpoints.xl}px){
		grid-template: 1fr / 1fr 1fr;
	}
	
	@media (max-width: ${breakpoints.md}px) {
		grid-template: 1fr / 1fr;
	}
	`
);

export const HomeIconWrapper = styled.div`
  display: grid;
  place-items: center;
  max-width: 300px;

  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`;
