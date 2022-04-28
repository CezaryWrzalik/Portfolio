import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 120px 1fr;

  @media (max-width: ${breakpoints.sm}px) {
    grid-template: 1fr / 0 1fr;
  }
`;

export const MainWrapper = styled.div`
  position: relative;
`;
