import { breakpoints } from "@shared/constants";
import styled, { css, keyframes } from "styled-components";

const commonInputStyles = css(
  ({ theme: { colors, fontSizes, radius } }) => `
    caret-color: ${colors.input.textPrimary};
    color: ${colors.input.textPrimary};
    border: 2px solid ${colors.dynamic};
    border-radius: ${radius[5]}px;
    background-color: inherit;
    height: 90%;
    line-height: 1.3;
    outline: none;
    width: 100%;
    padding: 0 15px;
    font-size: ${fontSizes[16]};

    @media (max-width: ${breakpoints.sm}px) {
        font-size: ${fontSizes[14]}px;
    }
    `
);

const errorBounceAnimation = keyframes`
    0%{
      width: 100%;
      height: 90%;
    }
    30%{
      width: 95%;
      height: 100%;
    }
    50%{
      width: 100%;
      height: 90%;
    } 
    70%{
      width: 98%;
      height: 93%;
    }
    80%{
      width: 100%;
      height: 90%;
    }
    90%{
      width: 99%;
      height: 92%;
    } 
    100%{
      width: 100%;
      height: 90%;
    } 
`;

const errorInputStyles = css(
  ({ theme: { colors } }) => css`
    border: 2px solid ${colors.input.error};
    transition: .5s;
    animation: ${errorBounceAnimation} ease-in-out 1.2s .5s;
  `
);

const inputPlaceholder = css(
  ({ theme: { colors } }) => `
  ::placeholder,
  ::-webkit-input-placeholder {
      color: ${colors.input.primaryPlaceholder};
    }
      `
);

export const BaseInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 100%;
`;

export const BaseInputElement = styled.input<{ error?: boolean }>(
  ({ error }) => css`
    ${commonInputStyles}
    ${inputPlaceholder}

  ${error && errorInputStyles}
  `
);
