import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import Projects from "@shared/images/Projects.png";
import {
  SkillsContentWrapper,
  SkillsRightSectionWrapper,
} from "./SkillsRightSection.styled";
import { SkillsContent } from "../../../../content/SkillsContent/SkillsContent";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";
import { sections } from "@shared/constants";
import { FirstLoadAnimation } from "@organisms/FirstLoadAnimations/FirstLoadAnimation";

export const SkillsRightSection = () => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  return (
    <SkillsRightSectionWrapper id="Skills" currElIndex={currElIndex}>
      <SkillsContentWrapper>
        <SkillsContent />
        <FirstLoadAnimation section={sections.skills} delay={6} last>
          <AnimatedImage
            image={Projects}
            side="Bottom"
            direction={"Top"}
            destination={sections.projects}
          />
        </FirstLoadAnimation>
      </SkillsContentWrapper>
    </SkillsRightSectionWrapper>
  );
};
