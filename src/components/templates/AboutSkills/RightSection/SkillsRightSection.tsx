import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import Projects from "@shared/images/Projects.png";
import { TextWrapper } from "./AboutRightSection.styled";
import {
  ContentWrapper,
  SkillsRightSectionWrapper,
} from "./SkillsRightSection.styled";
import { SkillsContent } from "../../../content/SkillsContent/SkillsContent";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";
import { sections } from "@shared/constants";
import { FirstLoadAnimation } from "@organisms/FirstLoadAnimations/FirstLoadAnimation";

export const SkillsRightSection = () => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  return (
    <SkillsRightSectionWrapper id="Skills" currElIndex={currElIndex}>
      <ContentWrapper>
        <TextWrapper>
          <SkillsContent />
        </TextWrapper>
        <FirstLoadAnimation
          section={sections.skills}
          delay={6}
          last
        >
          <AnimatedImage
            image={Projects}
            side="Bottom"
            direction={"Top"}
            destination={sections.projects}
          />
        </FirstLoadAnimation>
      </ContentWrapper>
    </SkillsRightSectionWrapper>
  );
};
