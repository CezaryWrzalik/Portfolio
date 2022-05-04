import { SidebarMarkers } from "src/components/organisms/SidebarMarkers/SidebarMarkers";
import { SidebarMenu } from "../../organisms/SidebarMenu/SidebarMenu";
import {LayoutWrapper, MainWrapper } from "./Layout.styled";
import { VerticalModal } from "@molecules/VerticalModal/VerticalModal";
import useScroll from "@utils/hooks/useScroll";
import { Footer } from "@atoms/Footer/Footer";
import { PageLoader } from "@molecules/PageLoader/PageLoader";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  const [currElIndex, setCurrElIndex] = useRecoilState(currElIndexAtom);
  const [isVisible, setIsVisible] = useState(false);
  useScroll();

  const handleClick = (elementIndex: number) => {
    setCurrElIndex(elementIndex);
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
