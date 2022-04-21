import { Typography } from "@atoms/Typography/Typography";
import {
  AboutPhotoWrapper,
  AboutTextWrapper,
  AboutWrapper,
  BlurElement,
  BorderWrapper,
  ImageWrapper,
} from "./About.styled";
import Border from "@shared/images/Border.png";
import Me from "@shared/images/Me.png"
import Image from "next/image";
import { yValuesKeys } from "@@types/CommonTypes";

type AboutProps = {
  elementOnScreen: yValuesKeys
}

export const About = ({elementOnScreen}: AboutProps) => {
  console.log(elementOnScreen)
  return (
    <AboutWrapper id="About">
      <AboutTextWrapper>
        <Typography.TextH1_96>About</Typography.TextH1_96>
        <Typography.TextBody_16>
          Hello! My name is Czarek im a <b>Front-end Developer</b> located in
          Poland. Making websites is my passion.
        </Typography.TextBody_16>

        <Typography.TextBody_16>
          I’ve started my adventure with programming in 2018 by making my first
          bank app in Python and MySQL but quickly after that i switched into
          Html and JavaScript. For over 2 years i was learning this language by
          writing all kind of applications like games, weather apps forums or
          shops and implementing new technologies into them.
        </Typography.TextBody_16>
        <Typography.TextBody_16>
          Well-organised person and a problem solver. Besides programming, im
          also fascinated in astronomy. Fan of F1, climbing, cycling and
          computer games.
        </Typography.TextBody_16>
      </AboutTextWrapper>
      <AboutPhotoWrapper>
        <BorderWrapper elementOnScreen={elementOnScreen}>
          <Image src={Border} />
        </BorderWrapper>
        <ImageWrapper elementOnScreen={elementOnScreen}>
          <Image src={Me} />
          <BlurElement />
        </ImageWrapper>
      </AboutPhotoWrapper>
    </AboutWrapper>
  );
};
