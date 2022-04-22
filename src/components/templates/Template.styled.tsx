import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const TemplateWrapper = styled.div`
  display: grid;
  max-height: 100%;
  grid-template: repeat(2, minmax(100vh, auto)) / 1fr;
  padding: 0;
  margin: 0;
`;

export const AboutSkillsWrapper = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  height: 100%;
  width: 100%;
	color: white;

  @media (max-width: ${breakpoints.sm}px){
    grid-template: auto / 3fr 1fr;
  }
`;
