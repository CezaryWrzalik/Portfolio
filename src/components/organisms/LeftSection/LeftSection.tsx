import Image from "next/image";
import {
  BlurElement,
  BorderWrapper,
  ImageWrapper,
  LeftSectionWrapper,
  SkillsImageWrapper,
} from "./LeftSection.styled";
import Border from "@shared/images/Border.png";
import Me from "@shared/images/Me.png";
import Hi from "@shared/images/Hi.png";
import Skills from "@shared/images/Skills.png";
import About from "@shared/images/About.png";
import { yValuesKeys } from "@@types/CommonTypes";
import { AnimatedImage } from "@molecules/AnimatedImage/AnimatedImage";

type LeftSectionProps = {
  elementOnScreen: yValuesKeys;
};

export const LeftSection = ({ elementOnScreen }: LeftSectionProps) => {
  return (
    <LeftSectionWrapper>
      <AnimatedImage
			visible={elementOnScreen !== "About"}
        image={About}
        side="Top"
      />
			 <AnimatedImage
			 visible={elementOnScreen === "About"}
        image={Hi}
        side="Top"
      />
      <BorderWrapper elementOnScreen={elementOnScreen}>
        <Image src={Border} />
      </BorderWrapper>
      <ImageWrapper elementOnScreen={elementOnScreen}>
        <Image src={Me} />
        <BlurElement />
      </ImageWrapper>
      <SkillsImageWrapper elementOnScreen={elementOnScreen}>
        <Image src={Skills} />
      </SkillsImageWrapper>
    </LeftSectionWrapper>
  );
};
