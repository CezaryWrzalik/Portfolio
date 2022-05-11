import { HamburgerIcon } from "@molecules/HamburgerIcon/HamburgerIcon";
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
import { menuItems, sections } from "@shared/constants";
import { SectionIndexes } from "@@types/CommonTypes";

export type SidebarMenuProps = {
  handleClick: (elementIndex: SectionIndexes) => void;
  isVisible?: boolean;
};

export const SidebarMenu = ({ handleClick, isVisible }: SidebarMenuProps) => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  const [showMenu, setShowMenu] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
        <SidebarMenuWrapper showMenu={showMenu} isVisible={isVisible}>
          <MenuWrapper>
            {menuItems.map((data) => (
              <ItemContainer
                key={data.id}
                elementId={data.id}
                currElIndex={currElIndex}
                onClick={() => handleClick(data.id)}
              >
                <Typography.TextBullet_16 marks={false}>
                  {data.name}
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
