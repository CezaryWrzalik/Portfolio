import { SidebarMarkers } from "src/components/organisms/SidebarMarkers/SidebarMarkers";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { LayoutWrapper, MainWrapper } from "./Layout.styled";
import { VerticalModal } from "@molecules/VerticalModal/VerticalModal";
import useScroll, { ObjectKeys } from "@utils/hooks/useScroll";
import { Footer } from "@molecules/Footer/Footer";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  const { scrollToElement } = useScroll();

  const handleClick = (elementIndex: number) => {
    scrollToElement(elementIndex);
  };

  return (
    <>
      <LayoutWrapper>
        <SidebarMenu
          handleClick={(elementIndex) => handleClick(elementIndex)}
        />
        <MainWrapper>
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
