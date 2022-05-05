import styled, { css, keyframes } from "styled-components";
import { ButtonVariants } from "@@types/CommonTypes";
import { breakpoints } from "@shared/constants";

const buttonHoverAnimation = keyframes`
0%{
	padding: 12px 50px;
}
30%{
	padding: 12px 40px;
}
50%{
	padding: 12px 50px;
} 
70%{
	padding: 12px 45px;
}
80%{
	padding: 12px 50px;
}
90%{
	padding: 12px 48px;
} 
100%{
	padding: 12px 50px;
} 
`;

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
    cursor: pointer;
    border: 2px solid ${colors.dynamic};

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
