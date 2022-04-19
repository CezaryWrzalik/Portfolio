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

export const SidebarMenuWrapper = styled.div(
  ({ theme: { colors } }) => css`
    position: fixed;
    width: 120px;
    height: 100%;
    background: ${colors.sidebar.bgPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    z-index: 2;

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
  index?: number;
  currentActive?: number;
}>(
  ({ index, currentActive, theme: { colors } }) => `
		padding: 17px;
		text-align: center;
		width: 100%;
		border-top: 1px solid ${colors.sidebar.borderPrimary};
		color: ${colors.text.tertiary};
		cursor: pointer;

	&:last-child {
		border-bottom: 1px solid ${colors.sidebar.borderPrimary};
	}

	:hover{
		color: ${colors.text.dynamic};
	}

	${index === currentActive && `color: ${colors.dynamic}`}
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
  z-index: 5;
  right: 15px;
  top: 15px;
  visibility: hidden;

  @media (max-width: ${breakpoints.sm}px) {
    visibility: visible;
  }
`;
