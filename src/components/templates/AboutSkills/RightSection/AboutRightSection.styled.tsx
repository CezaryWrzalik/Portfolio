import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const AboutRightSectionWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
	overflow: hidden;
`;

export const TextWrapper = styled.div(
  ({ theme: { colors } }) => `
	display: grid;
	gap: 20px;
	color: ${colors.text.secondary};
	max-width: 440px;
	padding-right: 40px;

	@media (max-width: ${breakpoints.sm}px) {
		padding: 10px;
  }
	`
);

export const ButtonWrapper = styled.div`
	max-width: 200px;
`
