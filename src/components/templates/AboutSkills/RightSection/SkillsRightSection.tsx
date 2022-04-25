import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import Projects from "@shared/images/Projects.png";
import { TextWrapper } from "./AboutRightSection.styled";
import { SkillsRightSectionWrapper } from "./SkillsRightSection.styled";
import { yValuesKeys } from "@@types/CommonTypes";
import { SkillsContent } from "../../content/SkillsContent/SkillsContent";

type SkillsRightSectionProps = {
	elementOnScreen: yValuesKeys;
}

export const SkillsRightSection = ({elementOnScreen}: SkillsRightSectionProps) => {
  return (
    <SkillsRightSectionWrapper id="Skills" elementOnScreen={elementOnScreen}>
      <TextWrapper>
        <SkillsContent />
      </TextWrapper>
      <AnimatedImage image={Projects} side="Bottom" />
    </SkillsRightSectionWrapper>
  );
};
