import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const MainWrapper = styled.div<{ isVisible: boolean }>(
  ({ isVisible, theme: { transitions } }) => `
  position: relative;
  opacity: 0;
  margin-left: 120px;
  height: 100%;

  ${
    isVisible &&
    `
  opacity: 1;
  transition: ${transitions.default}s 1.5s; `
  }
  
  @media(max-width: ${breakpoints.sm}px){
    margin-left: 0;
  }
  `
);

export const LayoutMenuWrapper = styled.div`
  position: fixed;
  width: 120px;
  height: 100%;
`;
