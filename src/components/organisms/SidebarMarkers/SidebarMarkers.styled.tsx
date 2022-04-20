import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const SidebarMarkersWrapper = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  z-index: 0;
`;

export const MarkerContainer = styled.div<{
  elementId?: string;
  elementOnScreen?: string;
}>(
  ({ elementId, elementOnScreen, theme: { colors, radius } }) => `
		width: 12px;
		height: 12px;
		border-radius: ${radius[50]}%;
		border: 2px solid ${colors.dynamic};
		cursor: pointer;

	:hover{
		background: ${colors.dynamic};
	}

	${elementId === elementOnScreen && `background: ${colors.dynamic}`};
  
  `
);
