import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import { FirstLoadAnimation } from "@organisms/FirstLoadAnimations/FirstLoadAnimation";
import { AboutContent } from "@content/AboutContent/AboutContent";
import { sections } from "@shared/constants";
import Skills from "@shared/images/Skills.png";
import {
  AboutRightSectionWrapper,
  TextWrapper,
} from "./AboutRightSection.styled";

export const AboutRightSection = () => {
  return (
    <AboutRightSectionWrapper id="About">
      <TextWrapper>
        <AboutContent />
      </TextWrapper>
      <FirstLoadAnimation section={sections.about} delay={7}>
        <AnimatedImage
          image={Skills}
          side="Bottom"
          direction={"Top"}
          destination={sections.skills}
        />
      </FirstLoadAnimation>
    </AboutRightSectionWrapper>
  );
};
