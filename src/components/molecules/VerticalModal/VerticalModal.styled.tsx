import styled from "styled-components";

export const ScreenSizeModalWrapper = styled.div(
  ({ theme: { colors } }) => `
	position: fixed;
	display: grid;
	grid-template: 1fr / 1fr 2fr;
	place-items: center;
	height: 100%;
	width: 100%;
	background: ${colors.body.bgPrimary};
	z-index: 3;
	color: ${colors.text.primary};
	gap: 40px;

	h1{
		font-size: 100px;
	}

	h2{
		justify-self: start;
	}

	display: none;

	@media (max-height: 500px){
		display: grid;
	}
	`
);
