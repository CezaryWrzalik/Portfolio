import { ButtonHTMLAttributes } from "react";
import { ColorWrapper } from "./Color.styled"

export interface ColorProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
	background: string;
}

export const Color = ({background, ...rest}: ColorProps) => {
	return(
		<ColorWrapper {...rest} background={background}></ColorWrapper>
	)
}