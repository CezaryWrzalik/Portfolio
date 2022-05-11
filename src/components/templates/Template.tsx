import {
  AboutSkillsWrapper,
  TemplateWrapper,
  WrapperForMovingIcons,
} from "./Template.styled";
import { RightSection } from "./AboutSkills/RightSection/RightSection";
import { LeftSection } from "./AboutSkills/LeftSection/LeftSection";
import { Layout } from "@templates/Layout/Layout";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
import { MovingIcons } from "@organisms/MovingIcons/MovingIcons";
import { useRecoilValue } from "recoil";
import { iconsAtom } from "@@recoil/atom/iconsAtom";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";

export const Template = () => {
  const iconAmount = useRecoilValue(iconsAtom);
  const currElIndex = useRecoilValue(currElIndexAtom);
  
  return (
    <Layout>
      <TemplateWrapper>
        <WrapperForMovingIcons currElIndex={currElIndex}>
          <MovingIcons numOfEachIcon={iconAmount}/>
          <Home />
          <AboutSkillsWrapper>
            <RightSection />
            <LeftSection />
          </AboutSkillsWrapper>
        </WrapperForMovingIcons>
      <Projects />
       <Contact />
     </TemplateWrapper>
    </Layout>
  );
};
