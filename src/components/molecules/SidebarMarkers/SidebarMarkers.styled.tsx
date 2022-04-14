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
	`;
	
	export const MarkerContainer = styled.div<{
		index?: number;
		currentActive?: number;
	}>(
		({ index, currentActive, theme: { colors, radius } }) => `
		width: 12px;
		height: 12px;
		border-radius: ${radius[50]}%;
		border: 2px solid ${colors.dynamic};
		cursor: pointer;
		z-index: 100;

	:hover{
		background: ${colors.dynamic};
	}

	${index === currentActive && `background: ${colors.dynamic}`}
	
	`
);
