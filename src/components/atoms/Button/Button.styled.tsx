import styled, { css } from "styled-components";
import { ButtonVariants } from "@@types/CommonTypes";
import { breakpoints } from "@shared/constants";

const primaryButtonCss = css<{ disabled?: boolean }>(
  ({ theme: { colors } }) => css`
    background: ${colors.dynamic};
    color: ${colors.button.textPrimary};

    :hover {
      background: inherit;
      color: ${colors.dynamic};
    }
  `
);

const secondaryButtonCss = css(
  ({ theme: { colors } }) => css`
    background: inherit;
    color: ${colors.dynamic};

    :hover {
      background: ${colors.dynamic};
      color: ${colors.text.primary};
    }
  `
);

const teritaryButtonCss = css(
  ({ theme: { colors } }) => css`
    background: inherit;
    color: ${colors.dynamic};
  `
);

export const ButtonStyleTypes = {
  primary: primaryButtonCss,
  secondary: secondaryButtonCss,
  teritary: teritaryButtonCss,
};

export const ButtonWrapper = styled.button<{
  variant?: ButtonVariants;
  center?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}>(
  ({
    variant,
    center,
    fullWidth,
    theme: { radius, colors, transitions },
  }) => css`
    padding: 12px 40px;
    border: none;
    border-radius: ${radius["20"]}px;
    border: 2px solid ${colors.dynamic};
    cursor: pointer;

    @media (max-width: ${breakpoints.xs}px), (max-height: ${breakpoints.xs}px) {
      padding: 12px 30px;
    }

    ${primaryButtonCss};
    ${center && `margin: auto`};
    ${fullWidth && "width: 100%"};
    ${variant && ButtonStyleTypes[variant]};

    transition: ${transitions.default}s;
  `
);
