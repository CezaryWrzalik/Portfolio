import useScroll from "@utils/hooks/useScroll";
import { Home } from "../organisms/Home/Home";
import { Layout } from "../organisms/Layout/Layout";
import { LeftSection } from "../organisms/LeftSection/LeftSection";
import { RightSection } from "../organisms/RightSection/RightSection";
import { AboutSkillsWrapper, TemplateWrapper } from "./Template.styled";

export const Template = () => {
  const { scrollToElement, elementOnScreen, setElementOnScreen} = useScroll();
  return (
    <Layout
      scrollToElement={scrollToElement}
      elementOnScreen={elementOnScreen}
      setElementOnScreen={setElementOnScreen}
    >
      <TemplateWrapper>
        <Home />
        <AboutSkillsWrapper>
          <RightSection elementOnScreen={elementOnScreen}/>
          <LeftSection elementOnScreen={elementOnScreen}/>
        </AboutSkillsWrapper>
      </TemplateWrapper>
    </Layout>
  );
};
