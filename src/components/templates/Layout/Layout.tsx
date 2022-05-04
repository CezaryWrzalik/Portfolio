import { SidebarMarkers } from "src/components/organisms/SidebarMarkers/SidebarMarkers";
import { SidebarMenu } from "../../organisms/SidebarMenu/SidebarMenu";
import { LayoutMenuWrapper, LayoutWrapper, MainWrapper } from "./Layout.styled";
import { VerticalModal } from "@molecules/VerticalModal/VerticalModal";
import useScroll, { ObjectKeys } from "@utils/hooks/useScroll";
import { Footer } from "@atoms/Footer/Footer";
import { PageLoader } from "@molecules/PageLoader/PageLoader";
import { useEffect, useState } from "react";
import { ScrollDown } from "@molecules/ScrollDown/ScrollDown";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToElement } = useScroll();

  const handleClick = (elementIndex: number) => {
    scrollToElement(elementIndex);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <LayoutWrapper>
        <PageLoader isVisible={isVisible} />
        <SidebarMenu
          isVisible={isVisible}
          handleClick={(elementIndex) => handleClick(elementIndex)}
        />
        <MainWrapper isVisible={isVisible}>
          <SidebarMarkers
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
