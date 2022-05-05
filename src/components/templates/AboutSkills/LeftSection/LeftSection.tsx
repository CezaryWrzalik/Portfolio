import Image from "next/image";
import {
  BlurElement,
  BorderWrapper,
  ImagesWrapper,
  ImageWrapper,
  LeftSectionWrapper,
  SkillsImageWrapper,
} from "./LeftSection.styled";
import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";
import { sections } from "@shared/constants";
import { FirstLoadAnimation } from "@organisms/FirstLoadAnimations/FirstLoadAnimation";
import {
  ImageAbout,
  ImageBorder,
  ImageHi,
  ImageMe,
  ImageSkills,
} from "@shared/images";

export const LeftSection = () => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  return (
    <LeftSectionWrapper>
      <FirstLoadAnimation
        section={sections.skills}
        delay={6}
      >
        <AnimatedImage
          destination={sections.about}
          visible={currElIndex !== 1}
          image={ImageAbout}
          side="Top"
          direction={currElIndex === 0 ? "Top" : "Bottom"}
        />
      </FirstLoadAnimation>
      <FirstLoadAnimation section={sections.about} delay={7} last>
        <AnimatedImage
          destination={sections.home}
          visible={currElIndex === 1}
          image={ImageHi}
          side="Top"
          direction="Bottom"
        />
      </FirstLoadAnimation>
      <ImagesWrapper>
        <FirstLoadAnimation section={sections.about} delay={7}>
          <BorderWrapper currElIndex={currElIndex}>
            <Image src={ImageBorder} />
          </BorderWrapper>
          <ImageWrapper currElIndex={currElIndex}>
            <Image src={ImageMe} />
            <BlurElement />
          </ImageWrapper>
        </FirstLoadAnimation>
      </ImagesWrapper>
      <SkillsImageWrapper currElIndex={currElIndex}>
        <Image src={ImageSkills} />
      </SkillsImageWrapper>
    </LeftSectionWrapper>
  );
};
