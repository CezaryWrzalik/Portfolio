import styled, { css } from "styled-components";

export const TextDyanmicColor = styled.span(
  ({ theme: { colors, transitions } }) => css`
    font-size: inherit;
    font-weight: inherit;
    color: ${colors.dynamic};
    transition: ${transitions.default}s;
  `
);
