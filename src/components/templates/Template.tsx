import { TemplateWrapper } from "./Template.styled";
import { Layout } from "@templates/Layout/Layout";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
import { MovingIcons } from "@organisms/MovingIcons/MovingIcons";
import { useRecoilValue } from "recoil";
import { iconsAtom } from "@@recoil/atom/iconsAtom";
import { AboutAndSkills } from "./AboutSkills/AboutAndSkills";

export const Template = () => {
  const iconAmount = useRecoilValue(iconsAtom);

  return (
    <Layout>
      <TemplateWrapper>
        <MovingIcons numOfEachIcon={iconAmount} />
        <Home />
        <AboutAndSkills />
        <Projects />
        <Contact />
      </TemplateWrapper>
    </Layout>
  );
};
