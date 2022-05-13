import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const AboutRightSectionWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template: 1fr / 1fr;
  place-items: center;
  overflow: hidden;
`;

export const TextWrapper = styled.div(
  ({ theme: { colors } }) => `
	color: ${colors.text.primary};

	`
);
