import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const HomeWrapper = styled.div(
  ({ theme: { colors } }) => `
	display: grid;
	grid-template: 1fr / 2fr 1fr;
	height: 100%;
	place-items: center;
	color: ${colors.text.secondary};
	padding: 15px;
	max-width: 2300px;
	margin: auto;

	@media (max-width: ${breakpoints.md}px) {
		grid-template: 1fr / 1fr;
	}
	`
	);
	
	export const WelcomeTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin: auto;
	width: fit-content;

	@media (max-width: ${breakpoints.sm}px) {
		
	}
	`;

export const InfoWrapper = styled.div`
	display: grid;
	grid-template: auto / 1fr 1fr;
	gap: 20px;

	@media (max-width: ${breakpoints.sm}px) {
		grid-template: auto 1fr / auto;
	}
`

export const HomeButtonWrapper = styled.div`
`

export const HomeIconWrapper = styled.div`
	display: grid;
	place-items: center;
	max-width: 300px;
	
	@media (max-width: ${breakpoints.md}px) {
		display: none;
	}
`