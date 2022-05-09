import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const ContactWrapper = styled.div(
  ({ theme: { colors } }) => `
	position: relative;
	min-height: 100vh;
	width: 100%;
	padding: 50px;
	color: ${colors.text.primary};
	`
);
