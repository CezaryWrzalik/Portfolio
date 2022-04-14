import styled from "styled-components";

export const HamburgerIconWrapper = styled.div`
	position: relative;
	width: 30px;
`;

export const SpanWrapper = styled.span<{ open: boolean }>(
  ({ open, theme: {colors} }) => `
  display: block;
  position: absolute;
  height: 3px;
  width: 50%;
  background: ${colors.text.tertiary};
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
	
	&:nth-child(even) {
		left: 50%;
		border-radius: 0 9px 9px 0;
	}
	
	&:nth-child(odd) {
		left:0px;
		border-radius: 9px 0 0 9px;
	}
	
	&:nth-child(1), &:nth-child(2) {
		top: 0px;
	}
	
	&:nth-child(3), &:nth-child(4) {
		top: 10px;
	}
	
	&:nth-child(5), &:nth-child(6) {
		top: 20px;
	}
	
	${
    open &&
    `
	&:nth-child(1), &:nth-child(6) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	&:nth-child(2), &:nth-child(5) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}

	&:nth-child(1) {
		top: 5px;
	}

	&:nth-child(2) {
		left: calc(50% - 5px);
		top: 5px;
	}

	&:nth-child(3) {
  left: -50%;
  opacity: 0;
	}

	&:nth-child(4) {
  left: 100%;
  opacity: 0;
	}

	&:nth-child(5) {
  left: 0px;
  top: 15px;
	}

	&:nth-child(6) {
  left: calc(50% - 5px);
  top: 15px;
	}
	`
  }
	`
);
