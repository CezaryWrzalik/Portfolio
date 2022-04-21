import { ItemsType, yValuesKeys } from "@@types/CommonTypes";
import { HamburgerIcon } from "@atoms/HamburgerIcon/HamburgerIcon";
import { Typography } from "@atoms/Typography/Typography";
import { menuItemsShared } from "@shared/constants";
import useClickOutside from "@utils/hooks/useClickOutside";
import { useRef, useState } from "react";
import {
  ContentWrapper,
  IconWrapper,
  ItemContainer,
  MenuWrapper,
  ModalWrapper,
  SidebarMenuWrapper,
} from "./SidebarMenu.styled";

export type SidebarMenuProps = {
  menuItems: ItemsType;
  elementOnScreen: string;
  handleClick: (id: yValuesKeys) => void;
};

export const SidebarMenu = ({
  menuItems = menuItemsShared,
  elementOnScreen,
  handleClick,
}: SidebarMenuProps) => {
  const [showMenu, setShowMenu] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useClickOutside(contentRef, closeMenu, modalRef);

  return (
    <div>
      <ModalWrapper showMenu={showMenu} ref={modalRef}>
        <ContentWrapper ref={contentRef}>
          <IconWrapper>
            <HamburgerIcon
              open={showMenu}
              toggleMenu={() => toggleMenu()}
            ></HamburgerIcon>
          </IconWrapper>
          <SidebarMenuWrapper showMenu={showMenu}>
            <MenuWrapper>
              {Object.keys(menuItems).map((elementId) => (
                <ItemContainer
                elementId={elementId}
                  elementOnScreen={elementOnScreen}
                  onClick={() => handleClick(elementId as yValuesKeys)}
                >
                  <Typography.TextBullet_16 marks={false}>
                    {elementId}
                  </Typography.TextBullet_16>
                </ItemContainer>
              ))}
            </MenuWrapper>
          </SidebarMenuWrapper>
        </ContentWrapper>
      </ModalWrapper>
    </div>
  );
};
