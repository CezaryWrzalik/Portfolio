import { breakpoints, zIndexes } from "@shared/constants";
import styled, { css } from "styled-components";

// Image Content

export const ProjectImageContentWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  height: 100%;
  width: 100%;
  @media (max-width: ${breakpoints.sm}px) {
    grid-template: 20px 1fr / 1fr;
    gap: 20px;
    height: 480px;
  }
`;

export const ProjectHeaderMobile = styled.div`
  display: none;
  text-align: center;

  @media (max-width: ${breakpoints.sm}px) {
    display: block;
  }
`;

export const ProjectImageWrapper = styled.div<{ mobile?: boolean }>(
  ({ mobile }) => `
	position: relative;
	display: ${mobile ? "none" : "block"};
	
  @media (max-width: ${breakpoints.sm}px) {
		display: ${mobile ? "block" : "none"};

  }
	`
);

// Text Content

const cssProjectContentWrapperMobile = css<{ mobileContentVisible: boolean }>(
  ({ mobileContentVisible, theme: { colors, radius } }) => css`
    @media (max-width: ${breakpoints.sm}px) {
      transition: opacity 0.5s, visibility 0s 0.5s;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      z-index: ${zIndexes.projectsPlus};

      ${mobileContentVisible &&
      `
      transition: opacity .5s, visibility 0s 0s;
    	opacity: 1;
    	visibility: visible;
    	`}
      grid-template: 1fr / 1fr;
      background: ${colors.body.bgTeritary}90;
      height: 100%;
      backdrop-filter: blur(10px);
      box-shadow: 0px 0px 5px ${colors.body.bgPrimary};
      padding: 20px;
      border-radius: ${radius[20]}px;
    }
  `
);

export const ProjectContentWrapper = styled.div<{
  mobileContentVisible: boolean;
}>(
  () => css`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
    left: 0;

    ${cssProjectContentWrapperMobile};
  `
);

export const ProjectContentTitle = styled.div``;

export const ProjectContentYear = styled.span(
  ({ theme: { colors, radius } }) => `
	
	padding: 1px 5px;
	margin-left: 10px;
	background: ${colors.dynamic};
	border-radius: ${radius[5]}px;
	`
);

export const ProjectContentDescription = styled.div``;

export const ProjectContentTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 5px;
`;

export const ProjectContentStage = styled.div``;

export const ProjectContentButtons = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  width: 100%;
  gap: 10px;

  @media (max-width: ${breakpoints.md}px) {
    grid-template: 1fr 1fr / 1fr;
  }
`;

export const ProjectContentButton = styled.div`
  display: inline;
  max-width: 200px;
`;
