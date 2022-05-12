import { SidebarMarkers } from "@organisms/Menu/SidebarMarkers/SidebarMarkers";
import { VerticalModal } from "@molecules/VerticalModal/VerticalModal";
import { SidebarMenu } from "@organisms/Menu/SidebarMenu/SidebarMenu";
import { PageLoader } from "@molecules/PageLoader/PageLoader";
import {LayoutWrapper, MainWrapper } from "./Layout.styled";
import useScroll from "@utils/hooks/useScroll";
import { Footer } from "@atoms/Footer/Footer";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { SectionIndexes } from "@@types/CommonTypes";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  const setCurrElIndex = useSetRecoilState(currElIndexAtom);
  const [isVisible, setIsVisible] = useState(false);
  useScroll();

  const handleClick = (elementIndex: SectionIndexes) => {
    setCurrElIndex(elementIndex);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <VerticalModal />
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
          {/* <Footer /> */}
        </MainWrapper>
        <VerticalModal />
      </LayoutWrapper>
    </>
  );
};
