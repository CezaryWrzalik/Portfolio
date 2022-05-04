import Image from "next/image";
import {
  BlurElement,
  BorderWrapper,
  ImagesWrapper,
  ImageWrapper,
  LeftSectionWrapper,
  SkillsImageWrapper,
} from "./LeftSection.styled";
import Border from "@shared/images/Border.png";
import Me from "@shared/images/Me.png";
import Hi from "@shared/images/Hi.png";
import Skills from "@shared/images/Skills.png";
import About from "@shared/images/About.png";
import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";

export const LeftSection = () => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  return (
    <LeftSectionWrapper>
      <AnimatedImage
        destination={1}
        visible={currElIndex !== 1}
        image={About}
        side="Top"
        direction={currElIndex === 0 ? "Top" : "Bottom"}
      />
      <AnimatedImage
        destination={2}
        visible={currElIndex === 1}
        image={Hi}
        side="Top"
        direction="Bottom"
      />
      <ImagesWrapper>
        <BorderWrapper currElIndex={currElIndex}>
          <Image src={Border} />
        </BorderWrapper>
        <ImageWrapper currElIndex={currElIndex}>
          <Image src={Me} />
          <BlurElement />
        </ImageWrapper>
      </ImagesWrapper>
      <SkillsImageWrapper currElIndex={currElIndex}>
        <Image src={Skills} />
      </SkillsImageWrapper>
    </LeftSectionWrapper>
  );
};
