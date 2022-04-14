import styled, { css } from "styled-components";

export const BaseTextareaWrapper = styled.textarea<{
  isResize?: boolean;
}>(
  ({ theme: { colors, fontSizes, radius }, isResize }) => css`
    border: 2px solid ${colors.input.borderPrimary};
    background: inherit;
    border-radius: ${radius[5]}px;
    caret-color: ${colors.input.textPrimary};
    color: ${colors.input.textPrimary};
    font-size: ${fontSizes[16]}px;
    min-height: 125px;
    outline: none;
    padding: 16px;
    width: 100%;
    resize: ${isResize ? "vertical" : "none"};
		max-height: 400px;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${colors.input.primaryPlaceholder};
    }

    &:focus {
      border: 2px solid ${colors.input.borderPrimary};
    }
  `
);
