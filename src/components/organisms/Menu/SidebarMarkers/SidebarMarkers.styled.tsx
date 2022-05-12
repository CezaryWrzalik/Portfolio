import { zIndexes } from "@shared/constants";
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
  z-index: ${zIndexes.layout};
`;

export const MarkerContainer = styled.div<{
  markerIndex?: number;
  currElIndex: number;
}>(
  ({ markerIndex, currElIndex, theme: { colors, radius, transitions } }) => `
		width: 12px;
		height: 12px;
		border-radius: ${radius[50]}%;
		border: 2px solid ${currElIndex > 0 && currElIndex < 4 ? colors.body.bgPrimary : colors.dynamic};
		cursor: pointer;
    transition: ${transitions.default}s;

    @media(hover: hover){
	    :hover{
		  background: ${colors.dynamic};
	}
}

    ${
      markerIndex === currElIndex &&
      `background: ${currElIndex > 0 && currElIndex < 4 ? colors.body.bgPrimary : colors.dynamic}`
    };
  
  
  `
);
