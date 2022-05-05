import styled from "styled-components";
import { ColorProps } from "./Color";

export const ColorWrapper = styled.button<ColorProps>(
  ({ background, theme: { colors } }) => `
	background: #${background};
	width: 100%;
	height: 100%;
	border: 1px solid ${colors.text.secondary};
	`
);
