import useScroll from "@utils/hooks/useScroll";
import { About } from "../organisms/About/About";
import { Contact } from "../organisms/Contact/Contact";
import { Home } from "../organisms/Home/Home";
import { Layout } from "../organisms/Layout/Layout";
import { Projects } from "../organisms/Projects/Projects";
import { TemplateWrapper } from "./Template.styled";

export const Template = () => {
  const { scrollToElement } = useScroll();
  return (
    <Layout>
      <TemplateWrapper>
        <Home />
        <About />
      </TemplateWrapper>
    </Layout>
  );
};
