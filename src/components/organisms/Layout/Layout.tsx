import { SidebarMarkers } from "src/components/organisms/SidebarMarkers/SidebarMarkers";
import { useState } from "react";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { LayoutWrapper, MainWrapper } from "./Layout.styled";
import { VerticalModal } from "@molecules/VerticalModal/VerticalModal";
import { ObjectKeys } from "@utils/hooks/useScroll";
import { Footer } from "@molecules/Footer/Footer";

type LayoutProps = {
  children: JSX.Element;
  scrollToElement: (elementIndex: number) => void;
};

export const Layout = ({ children, scrollToElement }: LayoutProps) => {
  const [menuItems, setMenuItems] = useState(ObjectKeys);

  const handleClick = (elementIndex: number) => {
    scrollToElement(elementIndex);
  };

  return (
    <>
      <LayoutWrapper>
        <SidebarMenu
          menuItems={menuItems}
          handleClick={(elementIndex) => handleClick(elementIndex)}
        />
        <MainWrapper>
          <SidebarMarkers
            menuItems={menuItems}
            handleClick={(elementIndex) => handleClick(elementIndex)}
          />
          {children}
        <Footer />
        </MainWrapper>
        <VerticalModal />
      </LayoutWrapper>
    </>
  );
};
