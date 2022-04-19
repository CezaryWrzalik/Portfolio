import { breakpoints } from "@shared/constants";
import styled, { css } from "styled-components";
import { repeatableStyles } from "./repeatableStyles.styled";

export const repeatableBodyCss = css(
  ({ theme: { fontFamily } }) => css`
    ${repeatableStyles};
    font-family: ${fontFamily.primary};
  `
);

export const TextBody_16 = styled.p<{ bold?: boolean }>(
  ({ bold, theme: { fontSizes } }) => css`
    ${repeatableBodyCss};
    font-size: ${fontSizes[16]}px;
    font-weight: ${bold ? "bold" : "regular"};

    @media (max-width: ${breakpoints.sm}px), (max-height: ${breakpoints.sm}px) {
      font-size: 14px;
    }
  `
);
