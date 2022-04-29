import { HamburgerIcon } from "@atoms/HamburgerIcon/HamburgerIcon";
import { Typography } from "@atoms/Typography/Typography";
import useClickOutside from "@utils/hooks/useClickOutside";
import { useRef, useState } from "react";
import {
  ContentWrapper,
  IconWrapper,
  ItemContainer,
  MenuWrapper,
  SidebarMenuWrapper,
} from "./SidebarMenu.styled";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";
import { BackgroundModal } from "@atoms/BackgroundModal/BackgroundModal";
import { ObjectKeys } from "@utils/hooks/useScroll";

export type SidebarMenuProps = {
  handleClick: (elementIndex: number) => void;
};

export const SidebarMenu = ({ handleClick }: SidebarMenuProps) => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  const [showMenu, setShowMenu] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const menuItems = ObjectKeys;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useClickOutside(contentRef, closeMenu, backgroundRef);

  return (
    <>
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
      <BackgroundModal active={showMenu} ref={backgroundRef} />
    </>
  );
};
