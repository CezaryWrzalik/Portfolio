import styled from "styled-components";

export const ProjectWrapper = styled.div`
  border-bottom: 1px solid black;
`;

export const ProjectLimiter = styled.div`
  margin: auto;
  padding: 50px;
  text-align: start;
  text-transform: none;
  gap: 100px;
  font-weight: bold;
  height: 400px;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  max-width: 1100px;
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
`;

export const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
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

