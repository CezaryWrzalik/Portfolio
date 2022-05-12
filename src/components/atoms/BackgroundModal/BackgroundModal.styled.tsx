import { zIndexes } from "@shared/constants";
import styled from "styled-components";

export const BackgroundModalWrapper = styled.div<{ active: boolean }>(
  ({ active }) => `
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	z-index: ${zIndexes.max};
	display: ${active ? "block" : "none"};
`
);
