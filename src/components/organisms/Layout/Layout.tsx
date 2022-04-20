import { yValuesKeys } from "@@types/CommonTypes";
import { SidebarMarkers } from "src/components/organisms/SidebarMarkers/SidebarMarkers";
import { menuItemsShared } from "@shared/constants";
import { useState } from "react";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { LayoutWrapper, MainWrapper } from "./Layout.styled";
import useScroll from "@utils/hooks/useScroll";

type LayoutProps = {
  children: JSX.Element;
  scrollToElement: (element: yValuesKeys) => void;
  elementOnScreen: yValuesKeys;
  setElementOnScreen: (elemntId: yValuesKeys) => void;
};

export const Layout = ({
  children,
  scrollToElement,
  elementOnScreen,
}: LayoutProps) => {
  const [menuItems, setMenuItems] = useState(menuItemsShared);
  const handleClick = (elementId: yValuesKeys) => {
    scrollToElement(elementId);
  };

  return (
    <LayoutWrapper>
      <SidebarMenu
        menuItems={menuItems}
        elementOnScreen={elementOnScreen}
        handleClick={(id) => handleClick(id)}
      />
      <MainWrapper>
        <SidebarMarkers
          menuItems={menuItems}
          elementOnScreen={elementOnScreen}
          handleClick={(id) => handleClick(id)}
        />
        {children}
      </MainWrapper>
    </LayoutWrapper>
  );
};
