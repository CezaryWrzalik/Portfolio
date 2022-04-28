import styled from "styled-components";

export const FooterWrapper = styled.div(
  ({ theme: { colors } }) => `
	position: absolute;
	bottom: 0;
	height: 50px;
	line-height: 50px;
	width: 100%;
	text-align: center;
	background: ${colors.sidebar.bgPrimary};
	color: ${colors.text.primary};
	`
);
