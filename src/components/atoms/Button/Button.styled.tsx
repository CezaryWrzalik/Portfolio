import styled, { css, keyframes } from "styled-components";
import { ButtonVariants } from "@@types/CommonTypes";

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
    background: ${colors.button.bgPrimary};
    color: ${colors.button.textPrimary};

  `
);

const secondaryButtonCss = css(
  ({ theme: { colors } }) => css`
    background: inherit;
    color: ${colors.button.text};
  `
);

const teritaryButtonCss = css(
  ({ theme: { colors } }) => css`
    background: inherit;
    color: ${colors.button.textSecondary};
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 50px;
    border: none;
    border-radius: ${radius["20"]}px;
    cursor: pointer;
    border: 2px solid ${colors.button.border};
    
    ${primaryButtonCss};
    ${center && `margin: auto`};
    ${fullWidth && "width: 100%"};
    ${variant && ButtonStyleTypes[variant]};
    
    transition: opacity ${transitions.default}s;

    :hover {
      background: ${colors.button.bgPrimary};
			color: ${colors.button.textPrimary};
      opacity: 0.8;
      animation: ${buttonHoverAnimation} ease-in-out 1.2s;
    }
  `
);
