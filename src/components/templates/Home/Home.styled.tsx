import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const HomeIconWrapper = styled.div`
  display: grid;
  place-items: center;
  max-width: 300px;

  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`;

export const HomeWrapper = styled.div(
  ({ theme: { colors } }) => `
  position: relative;
	display: grid;
	place-items: center;
	grid-template: 1fr / 2fr 1fr;
	width: 100%;
	height: 100%;
	color: ${colors.text.primary};
	padding: 4px;
	margin: auto;
	
	@media (max-width: ${breakpoints.md}px) {
		grid-template: 1fr / 1fr;
	}
	`
);
