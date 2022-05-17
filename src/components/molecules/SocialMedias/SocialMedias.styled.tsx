import { zIndexes } from "@shared/constants";
import styled from "styled-components";

export const SocialsWrappers = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  place-items: center;
  margin-right: 40px;
  gap: 10px;
  top: 0;
  right: 0;
`;

export const SocialsAncor = styled.a`
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
