import { yValuesKeys } from "@@types/CommonTypes";
import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  height: 100%;
  place-items: center;

  @media (max-width: ${breakpoints.sm}px) {
    grid-template: 1fr / 1fr;
  }
`;

export const AboutTextWrapper = styled.div(
  ({ theme: { colors } }) => `
	display: grid;
	gap: 20px;
	color: ${colors.text.secondary};
	max-width: 440px;
	padding-right: 40px;

	@media (max-width: ${breakpoints.sm}px) {
		padding-left: 10px;
  }
	`
);

export const AboutPhotoWrapper = styled.div(
  ({ theme: { colors } }) => `
	background: ${colors.body.bgSecondary};
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
  
	@media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
  `
);

export const ImageWrapper = styled.div<{ elementOnScreen: yValuesKeys }>(
  ({ elementOnScreen }) => `
    position: relative;
    opacity: ${elementOnScreen === "About" ? "1" : "0"};
    transition: .5s;
    
    img {
      max-height: 300px;
    }
    
    
    @media (max-width: ${breakpoints.sm}px) {
      position: absolute;
      z-index: -1;
      margin-right: -50px;
      margin-bottom: 350px;
      img {
        max-height: 150px;
      }
    }
    `
);

export const BlurElement = styled.div(
  ({ theme: { colors } }) =>
    `
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${colors.body.bgPrimary};
	opacity: .4;
	top: 0;
	
  `
  );
  
  export const BorderWrapper = styled(ImageWrapper)`
  position: absolute;
  padding-left: 40px;
  padding-top: 40px;
`;
