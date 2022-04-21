import { yValuesKeys } from "@@types/CommonTypes";
import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const SkillsWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 120px);
  z-index: 1;
	overflow-y: scroll;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
`;

export const SkillsListSection = styled.div<{elementOnScreen: yValuesKeys}>(
  ({ elementOnScreen, theme: { colors } }) => `
	position: absolute;
	width: 50%;
	left: ${elementOnScreen === "Skills" ? `0%` : '-50%'};
	height: 100%;
  background-color: ${colors.body.bgPrimary};
  display: grid;
	place-items: center;
	transition: .5s;

	@media (max-width: ${breakpoints.sm}px){
		width: 100%;
		left: ${elementOnScreen === "Skills" ? `0%` : '-100%'};
	}
	`
);

export const SectionWrapper = styled.div`
  margin-top: 20px;
`;

export const SkillsListWrapper = styled.div(
  ({ theme: { colors } }) => `
	
  max-width: 440px;
  div svg {
		width: 160px;
  }
	
	h2{
		color: ${colors.dynamic};
	}

	@media (max-width: ${breakpoints.sm}px){
		width: 100%;
		padding: 10px;
	}
	`
);

export const SkillsList = styled.ul`
  padding: 0;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
  line-height: 1.5rem;
`;
