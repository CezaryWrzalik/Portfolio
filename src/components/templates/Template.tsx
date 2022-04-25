import useScroll from "@utils/hooks/useScroll";
import { Home } from "./Home/Home";
import { Layout } from "../organisms/Layout/Layout";
import { LeftSection } from "./AboutSkills/LeftSection/LeftSection";
import { RightSection } from "./AboutSkills/RightSection/RightSection";
import { AboutSkillsWrapper, TemplateWrapper } from "./Template.styled";
import { Projects } from "./Projects/Projects";

export const Template = () => {
  const { scrollToElement } = useScroll();
  return (
    <Layout
      scrollToElement={scrollToElement}
    >
      <TemplateWrapper>
        <Home />
        <AboutSkillsWrapper>
          <RightSection/>
          <LeftSection/>
        </AboutSkillsWrapper>
        <Projects />
      </TemplateWrapper>
    </Layout>
  );
};
