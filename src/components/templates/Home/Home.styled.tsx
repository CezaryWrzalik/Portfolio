import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const HomeWrapper = styled.div(
  ({ theme: { colors } }) => `
  position: relative;
	display: grid;
	place-items: center;
	grid-template: 1fr / 2fr 1fr;
	width: 100%;
	height: 100%;
	padding: 4px;
	margin: auto;
	
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
