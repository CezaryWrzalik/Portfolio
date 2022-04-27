import styled from "styled-components";

export const BackgroundModalWrapper = styled.div<{ active: boolean }>(
  ({ active }) => `
	top: 0;
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	display: none;
	z-index: 3;

	${
    active &&
    `
		display: block;
	`
  }
	`
);
