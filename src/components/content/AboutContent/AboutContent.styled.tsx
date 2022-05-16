import { zIndexes } from "@shared/constants";
import styled from "styled-components";

export const AboutContentWrapper = styled.div(
  ({theme: {colors}}) => `
  display: grid;
  position: relative;
  gap: 20px;
  max-width: 440px;
  padding-right: 40px;
	z-index: ${zIndexes.aboutPlus};
  color: ${colors.text.primary};
  `
  )

export const ButtonWrapper = styled.div`
  max-width: 200px;
`;
