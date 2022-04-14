import styled, { css } from "styled-components";

export const TextDyanmicColor = styled.span(
  ({ theme: { colors } }) => css`
    font-size: inherit;
    font-weight: inherit;
    color: ${colors.dynamic};
  `
);
