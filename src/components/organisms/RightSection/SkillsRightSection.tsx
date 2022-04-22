import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import Projects from "@shared/images/Projects.png";
import { TextWrapper } from "./AboutRightSection.styled";
import { SkillsRightSectionWrapper } from "./SkillsRightSection.styled";
import { SkillsContent } from "src/components/content/SkillsContent/SkillsContent";
import { yValuesKeys } from "@@types/CommonTypes";

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
