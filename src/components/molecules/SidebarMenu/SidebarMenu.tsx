import { ItemsType } from "@@types/CommonTypes";
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
  currentActive: number;
  handleClick: (id: number) => void;
};

export const SidebarMenu = ({
  menuItems = menuItemsShared,
  currentActive,
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
    <ModalWrapper ref={modalRef}>
      <ContentWrapper ref={contentRef}>
        <IconWrapper>
          <HamburgerIcon
            open={showMenu}
            toggleMenu={() => toggleMenu()}
          ></HamburgerIcon>
        </IconWrapper>
        <SidebarMenuWrapper showMenu={showMenu}>
          <MenuWrapper>
            {Object.keys(menuItems).map((name, id) => (
              <ItemContainer
                index={id}
                currentActive={currentActive}
                onClick={() => handleClick(id)}
              >
                <Typography.TextBullet_16 marks={false}>
                  {name}
                </Typography.TextBullet_16>
              </ItemContainer>
            ))}
          </MenuWrapper>
        </SidebarMenuWrapper>
      </ContentWrapper>
    </ModalWrapper>
  );
};
