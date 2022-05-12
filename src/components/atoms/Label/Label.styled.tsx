import styled, { css } from "styled-components";

export const LabelWrapper = styled.label(
  ({ theme: { colors, fontSizes } }) => css`
    color: ${colors.text.primary};
    font-size: ${fontSizes[20]}px;s
    cursor: pointer;
  `
);
