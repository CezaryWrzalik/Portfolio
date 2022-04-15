import { ButtonVariants } from "@@types/CommonTypes";
import { Typography } from "@atoms/Typography/Typography";
import { ButtonHTMLAttributes } from "react";
import { ButtonWrapper } from "./Button.styled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
	variant?: ButtonVariants;
	center?: boolean;
	fullWidth?: boolean;
	disabled?: boolean;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <ButtonWrapper {...rest}>
      <Typography.TextButton_16>{children}</Typography.TextButton_16>
    </ButtonWrapper>
  );
};
