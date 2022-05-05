import { Button } from "@atoms/Button/Button";
import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import { FirstLoadAnimation } from "@organisms/FirstLoadAnimations/FirstLoadAnimation";
import { sections } from "@shared/constants";
import Skills from "@shared/images/Skills.png";
import { AboutContent } from "../../../content/AboutContent/AboutContent";
import {
  AboutRightSectionWrapper,
  ButtonWrapper,
  TextWrapper,
} from "./AboutRightSection.styled";

export const AboutRightSection = () => {
  return (
    <AboutRightSectionWrapper id="About">
      <TextWrapper>
        <AboutContent />
        <FirstLoadAnimation
          section={sections.about}
          delay={5}
          animation={"slideTop"}
        >
          <ButtonWrapper>
            <Button variant="primary" onClick={() => {}}>
              Contact me
            </Button>
          </ButtonWrapper>
        </FirstLoadAnimation>
      </TextWrapper>
      <FirstLoadAnimation
        section={sections.about}
        delay={7}
      >
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
