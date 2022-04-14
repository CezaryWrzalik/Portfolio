import styled from "styled-components";

export const HomeWrapper = styled.div(
  ({ theme: { colors } }) => `
	display: grid;
	grid-template: 1fr / 1fr 1fr;
	height: 100%;
	place-items: center;
	color: ${colors.text.secondary};
	`
	);
	
	export const WelcomeTextWrapper = styled.div`
	width: 78%;
	`;

export const InfoWrapper = styled.div`
	display: grid;
	grid-template: auto / 1fr 1fr;
`
