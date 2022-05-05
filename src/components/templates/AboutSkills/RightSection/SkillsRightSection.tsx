import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import Projects from "@shared/images/Projects.png";
import { TextWrapper } from "./AboutRightSection.styled";
import { SkillsRightSectionWrapper } from "./SkillsRightSection.styled";
import { SkillsContent } from "../../../content/SkillsContent/SkillsContent";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";
import { sections } from "@shared/constants";

export const SkillsRightSection = () => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  return (
    <SkillsRightSectionWrapper id="Skills" currElIndex={currElIndex}>
      <TextWrapper>
        <SkillsContent />
      </TextWrapper>
      <AnimatedImage image={Projects} side="Bottom" direction={"Top"} destination={sections.skills}/>
    </SkillsRightSectionWrapper>
  );
};
