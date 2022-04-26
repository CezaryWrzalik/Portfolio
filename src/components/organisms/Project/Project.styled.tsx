import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const ProjectWrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 50px;
`;

export const ProjectLimiter = styled.div`
  margin: auto;
  text-align: start;
  text-transform: none;
  gap: 100px;
  font-weight: bold;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  max-width: 1100px;
  transition: 0.5s;

  @media (max-width: ${breakpoints.md}px) {
    padding: 50px 0px;
    gap: 20px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    grid-template: 1fr / 1fr;
    height: 500px;
  }
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  display: none;

  @media (min-width: ${breakpoints.sm}px) {
    display: block;
  }
`;

export const ProjectImageWrapperMobile = styled.div`
  position: relative;
  display: none;

  @media (max-width: ${breakpoints.sm}px) {
    display: block;
  }
`;

export const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;

  @media (max-width: ${breakpoints.sm}px) {
    grid-template: 1fr / 1fr;
    display: none;
  }
`;

export const ProjectContentTitle = styled.div``;

export const ProjectContentYear = styled.span(
  ({ theme: { colors, radius } }) => `
	
	padding: 1px 5px;
	margin-left: 10px;
	background: ${colors.body.bgSecondary};
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
  grid-template: 50px / 200px 200px;
`;

export const ProjectContentButton = styled.div`
  display: inline;
  max-width: 200px;
`;

export const ProjectHeaderMobile = styled.div`
display: none;

@media (max-width: ${breakpoints.sm}px) {
  display: block;
}
`