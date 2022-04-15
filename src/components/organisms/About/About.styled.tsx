import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  height: 100%;
	place-items: center;
`;

export const AboutTextWrapper = styled.div(
  ({ theme: {colors} }) => `
	display: grid;
	gap: 20px;
	color: ${colors.text.secondary};
	max-width: 440px;
	padding-right: 40px;
	`
);

export const AboutPhotoWrapper = styled.div(
  ({ theme: { colors } }) => `
	background: ${colors.body.bgSecondary};
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
`
);

export const ImageWrapper = styled.div`
	max-width: 250px;
	height: 300px;
	position: relative;

	img {
		position: absolute;
	}
`
