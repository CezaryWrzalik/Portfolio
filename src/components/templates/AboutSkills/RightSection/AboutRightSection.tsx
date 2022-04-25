import { Button } from "@atoms/Button/Button";
import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import Skills from "@shared/images/Skills.png";
import { AboutContent } from "../../content/AboutContent/AboutContent";
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
        <ButtonWrapper>
          <Button variant="primary">Contact me</Button>
        </ButtonWrapper>
      </TextWrapper>
      <AnimatedImage image={Skills} side="Bottom" />
    </AboutRightSectionWrapper>
  );
};
