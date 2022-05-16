import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { useRecoilValue } from "recoil";
import { AboutAndSkillsWrapper } from "./AboutAndSkills.styled";
import { LeftSection } from "./LeftSection/LeftSection";
import { RightSection } from "./RightSection/RightSection";

export const AboutAndSkills = () => {
  const currElIndex = useRecoilValue(currElIndexAtom);

  return (
    <AboutAndSkillsWrapper currElIndex={currElIndex}>
      <RightSection />
      <LeftSection />
    </AboutAndSkillsWrapper>
  );
};
