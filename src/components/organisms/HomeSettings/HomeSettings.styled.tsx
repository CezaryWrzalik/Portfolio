import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const HomeSettingsWrapper = styled.div(
  ({ theme: { colors, radius, transitions } }) => `
	width: 40px;
	height: 40px;
	position: absolute;
	right: 20px;
	top: 20px;
	z-index: 4;
	border-radius: ${radius[50]}%;
	display: grid;
	border: 2px solid ${colors.dynamic};
	place-items: center;
	cursor: pointer;
	transition: ${transitions.default}s;

	@media(max-width: ${breakpoints.sm}px){
		display: none;
	}

	:hover {
		background: ${colors.dynamic};
	}
	`
);

export const SettingsWrapper = styled.div<{ isVisible: boolean }>(
  ({ isVisible, theme: { colors, radius, transitions } }) => `
	position: absolute;
	height: 40px;
	width: 400px;
	top: ${isVisible ? 0 : -40}px;
	transition: ${transitions.default}s;
	background: ${colors.dynamic};
	left: 50%;
	transform: translate(-50%);
	border-radius: 0 0 ${radius[50]}px ${radius[50]}px;
	display: grid;
	grid-template: 40px / auto auto ;
	place-items: center;
	color: ${colors.text.secondary};
	z-index: 5;
	font-weight: bold;

	@media(max-width: ${breakpoints.sm}px){
		display: none;
	}
	`
);

export const IconsNumberSetting = styled.div(
  ({ theme: { colors } }) => `
  display: grid;
  grid-template: 1fr / auto 20px 20px;
  gap: 10px;
	
  svg {
		fill: ${colors.text.secondary};
    cursor: pointer;
    :hover {
			opacity: 0.4;
    }
  }
	`
);

export const ColorPicker = styled.div`
  display: grid;
  place-items: center;
  grid-template: 1fr / auto auto;
  gap: 10px;
  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 32px;
    height: 32px;
    padding: 0;
    border: 1px solid black;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
  }
`;
