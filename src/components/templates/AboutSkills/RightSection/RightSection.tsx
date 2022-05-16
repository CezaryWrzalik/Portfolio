import { RightSectionWrapper } from "./RightSection.styled";
import { AboutRightSection } from "./AboutRightSection/AboutRightSection";
import { SkillsRightSection } from "./SkillsRightSection/SkillsRightSection";

export const RightSection = () => {
  return (
    <RightSectionWrapper>
      <AboutRightSection />
      <SkillsRightSection />
    </RightSectionWrapper>
  );
};
