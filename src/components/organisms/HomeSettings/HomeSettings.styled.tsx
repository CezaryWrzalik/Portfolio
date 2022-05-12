import { breakpoints, zIndexes } from "@shared/constants";
import styled from "styled-components";

export const HomeSettingsWrapper = styled.div(
  ({ theme: { colors, radius, transitions } }) => `
	width: 40px;
	height: 40px;
	position: absolute;
	right: 20px;
	top: 20px;
	z-index: ${zIndexes.layoutPlus};
	display: grid;
	place-items: center;
	cursor: pointer;

	border: 2px solid ${colors.dynamic};
	border-radius: ${radius[50]}%;
	transition: ${transitions.default}s;

	:hover {
		background: ${colors.dynamic};
	}

	@media(max-width: ${breakpoints.sm}px){
		display: none;
	}
	`
);

export const SettingsWrapper = styled.div<{ isVisible: boolean }>(
  ({ isVisible, theme: { colors, radius, transitions } }) => `
	position: absolute;
	height: 40px;
	width: 400px;
	left: 50%;
	transform: translate(-50%);
	display: grid;
	grid-template: 40px / auto auto ;
	place-items: center;
	z-index: ${zIndexes.layoutPlus};
	font-weight: bold;

	top: ${isVisible ? 0 : -40}px;
	background: ${colors.dynamic};
	color: ${colors.text.secondary};
	transition: ${transitions.default}s;
	border-radius: 0 0 ${radius[50]}px ${radius[50]}px;

	@media(max-width: ${breakpoints.sm}px){
		display: none;
	}
	`
);

export const ColorSetting = styled.div`
  display: grid;
  place-items: center;
  grid-template: 1fr / auto auto;
  gap: 10px;
`;
