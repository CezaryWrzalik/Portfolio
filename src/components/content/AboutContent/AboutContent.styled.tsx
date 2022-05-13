import { zIndexes } from "@shared/constants";
import styled from "styled-components";

export const AboutContentWrapper = styled.div`
  display: grid;
  position: relative;
  gap: 20px;
  max-width: 440px;
  padding-right: 40px;
	z-index: ${zIndexes.aboutPlus};
`;

export const ButtonWrapper = styled.div`
  max-width: 200px;
`;
