import { ItemsType, yValuesKeys } from "@@types/CommonTypes";
import { HamburgerIcon } from "@atoms/HamburgerIcon/HamburgerIcon";
import { Typography } from "@atoms/Typography/Typography";
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
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";

export type SidebarMenuProps = {
  menuItems: ItemsType;
  handleClick: (elementIndex: number) => void;
};

export const SidebarMenu = ({ menuItems, handleClick }: SidebarMenuProps) => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
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
              {menuItems.map((value: string, i: number) => (
                <ItemContainer
                  key={i}
                  elementId={i}
                  currElIndex={currElIndex}
                  onClick={() => handleClick(i)}
                >
                  <Typography.TextBullet_16 marks={false}>
                    {value}
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
