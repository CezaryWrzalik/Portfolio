import useScroll from "@utils/hooks/useScroll";
import { About } from "../organisms/About/About";
import { Home } from "../organisms/Home/Home";
import { Layout } from "../organisms/Layout/Layout";
import { TemplateWrapper } from "./Template.styled";

export const Template = () => {
  const { scrollToElement, elementOnScreen, setElementOnScreen } = useScroll();
  return (
    <Layout scrollToElement={scrollToElement} elementOnScreen={elementOnScreen} setElementOnScreen={setElementOnScreen}>
      <TemplateWrapper>
        <Home />
        <About />
      </TemplateWrapper>
    </Layout>
  );
};
