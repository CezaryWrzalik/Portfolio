import {
  RightSectionWrapper,
} from "./RightSection.styled";
import { AboutRightSection } from "./AboutRightSection";
import { SkillsRightSection } from "./SkillsRightSection";
import { yValuesKeys } from "@@types/CommonTypes";

type RightSectionProps = {
	elementOnScreen: yValuesKeys;
}

export const RightSection = ({elementOnScreen}: RightSectionProps) => {
  return (
    <RightSectionWrapper>
      <AboutRightSection/>
      <SkillsRightSection elementOnScreen={elementOnScreen} />
    </RightSectionWrapper>
  );
};
