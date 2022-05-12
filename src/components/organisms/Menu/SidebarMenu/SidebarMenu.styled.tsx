import { SectionIndexes } from "@@types/CommonTypes";
import { breakpoints } from "@shared/constants";
import styled, { css } from "styled-components";

const sidebarMenuMobileStyles = css<{ showMenu: boolean }>(
  ({ showMenu, theme: { transitions } }) => `
	width: 100%;
	padding-top: 45px;
	height: 320px;
	color: blue;
	overflow: hidden;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	transition: ${transitions.default}s;
	
	${
    !showMenu &&
    `
	height: 0px;
	padding: 0;
	`
  }
	`
);

export const SidebarMenuWrapper = styled.div<{
  isVisible?: boolean;
  showMenu: boolean;
}>(
  ({ isVisible, theme: { colors, transitions } }) => css`
    position: fixed;
    width: 120px;
    left: ${isVisible ? "0" : "-120"}px;
    transition: left ${transitions.default}s 1s;
    height: 100%;
    background: ${colors.layout.bgPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    z-index: 6;

    @media (max-width: ${breakpoints.sm}px) {
      ${sidebarMenuMobileStyles};
    }
  `
);

export const MenuWrapper = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const ItemContainer = styled.div<{
  elementId?: SectionIndexes;
  currElIndex?: SectionIndexes;
}>(
  ({ elementId, currElIndex, theme: { colors, transitions } }) => `
		padding: 17px;
		text-align: center;
		width: 100%;
		border-top: 1px solid ${colors.layout.borderPrimary};
		color: ${colors.text.tertiary};
		cursor: pointer;
    transition: ${transitions.default}s;

	  &:last-child {
		border-bottom: 1px solid ${colors.layout.borderPrimary};
	  }

    ${elementId === currElIndex && `color: ${colors.dynamic}`};

    @media(hover: hover){
	  :hover{
		  color: ${colors.dynamic};
	  }
  }
	`
);

export const ModalWrapper = styled.div<{ showMenu: boolean }>(
  ({ showMenu }) => css`
    ${showMenu && `position: absolute`};
    height: 200%;
    width: 100%;
  `
);
export const ContentWrapper = styled.div``;

export const IconWrapper = styled.div`
  position: fixed;
  z-index: 7;
  right: 15px;
  top: 15px;
  visibility: hidden;

  @media (max-width: ${breakpoints.sm}px) {
    visibility: visible;
  }
`;
