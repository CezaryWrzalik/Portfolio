import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const ProjectWrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 50px 40px;
`;

export const ProjectLimiter = styled.div`
  position: relative;
  margin: auto;
  text-align: start;
  text-transform: none;
  min-height: 200px;
  gap: 100px;
  font-weight: bold;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  max-width: 1100px;

  @media (max-width: ${breakpoints.md}px) {
    padding: 20px 20px;
    gap: 20px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    grid-template: 1fr / 1fr;
    gap: 10px;
    height: 500px;
  }
`;