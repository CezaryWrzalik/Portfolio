import styled from "styled-components";

export const FooterWrapper = styled.div(
  ({ theme: { colors } }) => `
	position: absolute;
	bottom: 0;
	height: 150px;
	width: 100%;
	background: ${colors.sidebar.bgPrimary};
	`
);
