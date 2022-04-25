import useScroll from "@utils/hooks/useScroll";
import { Home } from "./Home/Home";
import { Layout } from "../organisms/Layout/Layout";
import { LeftSection } from "./AboutSkills/LeftSection/LeftSection";
import { RightSection } from "./AboutSkills/RightSection/RightSection";
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
