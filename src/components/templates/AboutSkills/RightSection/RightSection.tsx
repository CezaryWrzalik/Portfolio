import {
  RightSectionWrapper,
} from "./RightSection.styled";
import { AboutRightSection } from "./AboutRightSection";
import { SkillsRightSection } from "./SkillsRightSection";

export const RightSection = () => {
  return (
    <RightSectionWrapper>
      <AboutRightSection/>
      <SkillsRightSection />
    </RightSectionWrapper>
  );
};
